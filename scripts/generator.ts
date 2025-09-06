#!/usr/bin/env -S deno run --allow-read --allow-write

/**
 * Text-based N8N Node Documentation Generator
 * 
 * Simply parses TypeScript files as text to extract node definitions.
 * No imports, no JavaScript conversion - just straightforward text parsing.
 */

import * as fs from 'fs';
import * as path from 'path';

interface NodeDefinition {
    displayName: string;
    name: string;
    type: string;
    description: string;
    version: number;
    defaults: any;
    properties: any[];
    filePath: string;
    docsUrl: string;
    sourceUrl: string;
    packageName: string;
}

interface ParseError {
    file?: string;
    node?: string;
    error: string;
}

class TextBasedN8NDocGenerator {
    public n8nPath: string;
    public nodesBasePath: string;
    public langchainPath: string;
    public outputPath: string;
    private nodeDefinitions: Map<string, NodeDefinition>;
    private errors: ParseError[];

    constructor() {
        this.n8nPath = 'n8n';
        this.nodesBasePath = path.join(this.n8nPath, 'packages', 'nodes-base', 'nodes');
        this.langchainPath = path.join(this.n8nPath, 'packages', '@n8n', 'nodes-langchain');
        this.outputPath = path.join(Deno.cwd(), 'docs', 'nodes');
        this.nodeDefinitions = new Map<string, NodeDefinition>();
        this.errors = [];
    }

    /**
     * Main generation method
     */
    async generate(): Promise<void> {
        console.log('🚀 Starting N8N Node Documentation Generation');
        
        this.validatePaths();
        this.prepareOutputDirectory();
        
        await this.parseNodeDefinitions();
        
        if (this.nodeDefinitions.size === 0) {
            throw new Error('No node definitions found');
        }
        
        this.generateDocumentationFiles();
        this.generateIndex();
        this.printSummary();
    }

    /**
     * Validate required paths exist
     */
    validatePaths(): void {
        if (!fs.existsSync(this.n8nPath)) {
            throw new Error(`N8N repository not found at: ${this.n8nPath}`);
        }
        
        if (!fs.existsSync(this.nodesBasePath)) {
            throw new Error(`Nodes directory not found at: ${this.nodesBasePath}`);
        }
        
        if (fs.existsSync(this.langchainPath)) {
            console.log('✅ LangChain nodes package found');
        } else {
            console.log('⚠️  LangChain nodes package not found - will skip AI nodes');
        }
        
        console.log('✅ N8N repository paths validated');
    }

    /**
     * Prepare output directory
     */
    prepareOutputDirectory(): void {
        if (fs.existsSync(this.outputPath)) {
            fs.rmSync(this.outputPath, { recursive: true, force: true });
        }
        fs.mkdirSync(this.outputPath, { recursive: true });
        console.log('✅ Output directory prepared');
    }

    /**
     * Parse all node definitions from text
     */
    async parseNodeDefinitions(): Promise<void> {
        console.log('📖 Parsing node definitions...');
        
        const nodeFiles = this.findNodeFiles(this.nodesBasePath);
        console.log(`Found ${nodeFiles.length} node files in nodes-base`);

        for (const filePath of nodeFiles) {
            try {
                await this.parseNodeFile(filePath, 'n8n-nodes-base');
            } catch (error: any) {
                this.errors.push({
                    file: path.basename(filePath),
                    error: error.message
                });
            }
        }
        
        if (fs.existsSync(this.langchainPath)) {
            console.log('📖 Parsing LangChain nodes...');
            const langchainFiles = this.findLangChainNodes(this.langchainPath);
            console.log(`Found ${langchainFiles.length} LangChain node files`);
            
            for (const filePath of langchainFiles) {
                try {
                    await this.parseLangChainNode(filePath);
                } catch (error: any) {
                    this.errors.push({
                        file: path.basename(filePath),
                        error: error.message
                    });
                }
            }
        }
        
        console.log(`✅ Parsed ${this.nodeDefinitions.size} nodes with ${this.errors.length} errors`);
    }

    /**
     * Find all .node.ts files recursively
     */
    findNodeFiles(dir: string, files: string[] = []): string[] {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            
            if (entry.isDirectory()) {
                this.findNodeFiles(fullPath, files);
            } else if (entry.name.endsWith('.node.ts')) {
                files.push(fullPath);
            }
        }
        
        return files;
    }

    /**
     * Parse a single node file from text
     */
    async parseNodeFile(filePath: string, packageName: string = 'n8n-nodes-base'): Promise<void> {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        const descriptionStart = fileContent.indexOf('description: INodeTypeDescription = {');
        if (descriptionStart === -1) {
            throw new Error('No INodeTypeDescription found');
        }
        
        let braceCount = 0;
        let start = descriptionStart + 'description: INodeTypeDescription = '.length;
        let end = start;
        
        for (let i = start; i < fileContent.length; i++) {
            const char = fileContent[i];
            if (char === '{') {
                braceCount++;
            } else if (char === '}') {
                braceCount--;
                if (braceCount === 0) {
                    end = i;
                    break;
                }
            }
        }
        
        const descriptionContent = fileContent.substring(start + 1, end);
        
        const displayName = this.extractStringProperty(descriptionContent, 'displayName');
        const name = this.extractStringProperty(descriptionContent, 'name');
        const description = this.extractStringProperty(descriptionContent, 'description');
        
        const versionMatch = descriptionContent.match(/version:\s*(\[[\d\s,\.]+\]|\d+(?:\.\d+)*)/);
        let version = 1;
        if (versionMatch) {
            const versionStr = versionMatch[1];
            if (versionStr.startsWith('[')) {
                const firstVersion = versionStr.match(/\[[\s]*(\d+(?:\.\d+)*)/);
                version = firstVersion ? parseFloat(firstVersion[1]) : 1;
            } else {
                version = parseFloat(versionStr);
            }
        }

        if (!name || !displayName) {
            throw new Error('Missing required name or displayName');
        }

        const properties = this.extractProperties(descriptionContent);

        const nodeDefinition: NodeDefinition = {
            displayName,
            name,
            type: name,
            description: description || 'No description available',
            version,
            defaults: {},
            properties,
            filePath,
            docsUrl: this.generateDocsUrl(name, packageName),
            sourceUrl: this.generateSourceUrl(filePath),
            packageName
        };

        this.nodeDefinitions.set(nodeDefinition.type, nodeDefinition);
    }

    /**
     * Extract string property value - improved to handle complex strings
     */
    extractStringProperty(content: string, property: string): string {
        const propIndex = content.indexOf(`${property}:`);
        if (propIndex === -1) return '';
        
        let start = propIndex + property.length + 1;
        while (start < content.length && /\s/.test(content[start])) {
            start++;
        }
        
        if (start >= content.length) return '';
        
        const quote = content[start];
        if (quote !== '"' && quote !== "'" && quote !== '`') {
            return '';
        }
        
        let end = start + 1;
        while (end < content.length) {
            if (content[end] === quote && content[end - 1] !== '\\') {
                return content.substring(start + 1, end);
            }
            end++;
        }
        
        return '';
    }

    /**
     * Extract properties array from description content
     */
    extractProperties(descriptionContent: string): any[] {
        const properties: any[] = [];
        
        const propIdx = descriptionContent.indexOf('properties:');
        if (propIdx === -1) return properties;
        
        const openBracketIdx = descriptionContent.indexOf('[', propIdx);
        if (openBracketIdx === -1) return properties;
        
        let bracketCount = 0;
        let closeBracketIdx = -1;
        
        for (let i = openBracketIdx; i < descriptionContent.length; i++) {
            if (descriptionContent[i] === '[') {
                bracketCount++;
            } else if (descriptionContent[i] === ']') {
                bracketCount--;
                if (bracketCount === 0) {
                    closeBracketIdx = i;
                    break;
                }
            }
        }
        
        if (closeBracketIdx === -1) return properties;
        
        const propsContent = descriptionContent.substring(openBracketIdx + 1, closeBracketIdx);
        
        const propertyObjects = this.extractBalancedObjects(propsContent);
        
        for (const propObj of propertyObjects) {
            try {
                const property = this.parseProperty(propObj);
                if (property.name) {
                    properties.push(property);
                }
            } catch (error) {
                continue;
            }
        }
        
        return properties;
    }

    /**
     * Extract balanced brace objects from text - improved version
     */
    extractBalancedObjects(text: string): string[] {
        const objects: string[] = [];
        let i = 0;
        
        while (i < text.length) {
            while (i < text.length && /[\\s,]/.test(text[i])) {
                i++;
            }
            
            if (i >= text.length) break;
            
            if (text[i] === '{') {
                const objectStart = i;
                let braceCount = 0;
                let inString = false;
                let stringChar = '';
                
                while (i < text.length) {
                    const char = text[i];
                    const prevChar = i > 0 ? text[i - 1] : '';
                    
                    if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\\\') {
                        if (!inString) {
                            inString = true;
                            stringChar = char;
                        } else if (char === stringChar) {
                            inString = false;
                            stringChar = '';
                        }
                    }
                    
                    if (!inString) {
                        if (char === '{') {
                            braceCount++;
                        } else if (char === '}') {
                            braceCount--;
                            if (braceCount === 0) {
                                const objectText = text.substring(objectStart, i + 1);
                                objects.push(objectText.trim());
                                i++;
                                break;
                            }
                        }
                    }
                    
                    i++;
                }
            } else {
                i++;
            }
        }
        
        return objects;
    }

    /**
     * Parse individual property object
     */
    parseProperty(propertyText: string): any {
        const property: any = {};
        
        property.displayName = this.extractStringProperty(propertyText, 'displayName') || '';
        property.name = this.extractStringProperty(propertyText, 'name') || '';
        property.type = this.extractStringProperty(propertyText, 'type') || 'string';
        property.description = this.extractStringProperty(propertyText, 'description') || '';
        property.placeholder = this.extractStringProperty(propertyText, 'placeholder') || '';
        
        const defaultValue = this.extractDefaultValue(propertyText);
        if (defaultValue !== undefined) {
            property.default = defaultValue;
        }
        
        if (property.type === 'collection' || property.type === 'options') {
            property.options = this.extractOptions(propertyText);
        }
        
        return property;
    }

    /**
     * Extract default value with better handling of complex values
     */
    extractDefaultValue(propertyText: string): any {
        const defaultIndex = propertyText.indexOf('default:');
        if (defaultIndex === -1) return undefined;
        
        let start = defaultIndex + 8;
        while (start < propertyText.length && /\s/.test(propertyText[start])) {
            start++;
        }
        
        if (start >= propertyText.length) return undefined;
        
        const char = propertyText[start];
        
        if (char === '[') {
            return this.extractArrayValue(propertyText, start);
        } else if (char === '{') {
            return this.extractObjectValue(propertyText, start);
        } else if (char === '"' || char === "'" || char === '`') {
            return this.extractQuotedValue(propertyText, start);
        } else {
            return this.extractPrimitiveValue(propertyText, start);
        }
    }

    /**
     * Extract array value like ['GET', 'POST']
     */
    extractArrayValue(text: string, start: number): string {
        let bracketCount = 0;
        let end = start;
        let inString = false;
        let stringChar = '';
        
        for (let i = start; i < text.length; i++) {
            const char = text[i];
            
            if (!inString && (char === '"' || char === "'" || char === '`')) {
                inString = true;
                stringChar = char;
            } else if (inString && char === stringChar && text[i-1] !== '\\\\') {
                inString = false;
                stringChar = '';
            }
            
            if (!inString) {
                if (char === '[') {
                    bracketCount++;
                } else if (char === ']') {
                    bracketCount--;
                    if (bracketCount === 0) {
                        end = i;
                        break;
                    }
                }
            }
        }
        
        return text.substring(start, end + 1);
    }

    /**
     * Extract object value like {}
     */
    extractObjectValue(text: string, start: number): string {
        let braceCount = 0;
        let end = start;
        let inString = false;
        let stringChar = '';
        
        for (let i = start; i < text.length; i++) {
            const char = text[i];
            
            if (!inString && (char === '"' || char === "'" || char === '`')) {
                inString = true;
                stringChar = char;
            } else if (inString && char === stringChar && text[i-1] !== '\\\\') {
                inString = false;
                stringChar = '';
            }
            
            if (!inString) {
                if (char === '{') {
                    braceCount++;
                } else if (char === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        end = i;
                        break;
                    }
                }
            }
        }
        
        return text.substring(start, end + 1);
    }

    /**
     * Extract quoted string value
     */
    extractQuotedValue(text: string, start: number): string {
        const quote = text[start];
        let end = start + 1;
        
        while (end < text.length) {
            if (text[end] === quote && text[end - 1] !== '\\\\') {
                break;
            }
            end++;
        }
        
        // Return the value without surrounding quotes
        return text.substring(start + 1, end);
    }

    /**
     * Extract primitive value (number, boolean, identifier)
     */
    extractPrimitiveValue(text: string, start: number): any {
        let end = start;
        
        while (end < text.length) {
            const char = text[end];
            if (char === ',' || char === '\\n' || char === '}' || char === ']') {
                break;
            }
            end++;
        }
        
        const value = text.substring(start, end).trim();
        
        if (value === 'true') return true;
        if (value === 'false') return false;
        if (/^\\d+$/.test(value)) return parseInt(value);
        if (/^\\d+\\.\\d+$/.test(value)) return parseFloat(value);
        
        return value;
    }

    /**
     * Extract options array from property text
     */
    extractOptions(propertyText: string): any[] {
        const options: any[] = [];
        
        const optionsMatch = propertyText.match(/options:\s*\[([\s\S]*?)\]/s);
        if (!optionsMatch) return options;
        
        const optionsContent = optionsMatch[1];
        const optionObjects = this.extractBalancedObjects(optionsContent);
        
        for (const optionObj of optionObjects) {
            const option = this.parseProperty(optionObj);
            if (option.name) {
                options.push(option);
            }
        }
        
        return options;
    }

    /**
     * Find LangChain node files
     */
    findLangChainNodes(dir: string, files: string[] = []): string[] {
        if (!fs.existsSync(dir)) return files;
        
        const nodesDir = path.join(dir, 'nodes');
        if (fs.existsSync(nodesDir)) {
            this.findNodeFilesRecursive(nodesDir, files, ['.node.ts', '.node.js']);
        }
        
        const clusterDir = path.join(dir, 'nodes', 'agents');
        if (fs.existsSync(clusterDir)) {
            this.findNodeFilesRecursive(clusterDir, files, ['.node.ts', '.node.js']);
        }
        
        const rootDir = path.join(dir, 'nodes', 'chains');
        if (fs.existsSync(rootDir)) {
            this.findNodeFilesRecursive(rootDir, files, ['.node.ts', '.node.js']);
        }
        
        return files;
    }

    /**
     * Recursively find node files with specific extensions
     */
    findNodeFilesRecursive(dir: string, files: string[] = [], extensions: string[] = ['.node.ts']): string[] {
        if (!fs.existsSync(dir)) return files;
        
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            
            if (entry.isDirectory()) {
                this.findNodeFilesRecursive(fullPath, files, extensions);
            } else if (extensions.some(ext => entry.name.endsWith(ext))) {
                files.push(fullPath);
            }
        }
        
        return files;
    }

    /**
     * Parse a LangChain node file
     */
    async parseLangChainNode(filePath: string): Promise<void> {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        let descriptionStart = fileContent.indexOf('description: INodeTypeDescription = {');
        let descriptionContent = '';
        
        if (descriptionStart === -1) {
            descriptionStart = fileContent.indexOf('description: {');
        }
        
        if (descriptionStart !== -1) {
            let braceCount = 0;
            let start = descriptionStart + (fileContent.substring(descriptionStart).indexOf('{'));
            let end = start;
            
            for (let i = start; i < fileContent.length; i++) {
                const char = fileContent[i];
                if (char === '{') {
                    braceCount++;
                } else if (char === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        end = i;
                        break;
                    }
                }
            }
            
            descriptionContent = fileContent.substring(start + 1, end);
        }
        
        if (!descriptionContent) {
            const classMatch = fileContent.match(/export\s+class\s+(\w+)\s+/);
            if (classMatch) {
                const className = classMatch[1];
                const simpleName = className.replace(/Node$/, '').replace(/^LangChain/, '');
                
                const nodeDefinition: NodeDefinition = {
                    displayName: simpleName,
                    name: simpleName,
                    type: simpleName,
                    description: `${simpleName} - LangChain AI Node`,
                    version: 1,
                    defaults: {},
                    properties: [],
                    filePath,
                    docsUrl: this.generateDocsUrl(simpleName, '@n8n/n8n-nodes-langchain'),
                    sourceUrl: this.generateSourceUrl(filePath),
                    packageName: '@n8n/n8n-nodes-langchain'
                };
                
                this.nodeDefinitions.set(`langchain.${nodeDefinition.type}`, nodeDefinition);
                return;
            }
            throw new Error('No node description found');
        }
        
        const displayName = this.extractStringProperty(descriptionContent, 'displayName') || 
                           this.extractStringProperty(descriptionContent, 'name');
        const name = this.extractStringProperty(descriptionContent, 'name');
        const description = this.extractStringProperty(descriptionContent, 'description');
        const properties = this.extractProperties(descriptionContent);
        
        if (!name || !displayName) {
            throw new Error('Missing required name or displayName');
        }

        const nodeDefinition: NodeDefinition = {
            displayName,
            name,
            type: name,
            description: description || `${displayName} - LangChain AI Node`,
            version: 1,
            defaults: {},
            properties,
            filePath,
            docsUrl: this.generateDocsUrl(name, '@n8n/n8n-nodes-langchain'),
            sourceUrl: this.generateSourceUrl(filePath),
            packageName: '@n8n/n8n-nodes-langchain'
        };

        this.nodeDefinitions.set(`langchain.${nodeDefinition.type}`, nodeDefinition);
    }


    /**
     * Generate documentation files for all nodes
     */
    generateDocumentationFiles(): void {
        console.log('📝 Generating documentation files...');
        
        for (const [type, node] of this.nodeDefinitions) {
            const content = this.generateNodeDocument(node);
            const filePath = path.join(this.outputPath, `${type}.md`);
            fs.writeFileSync(filePath, content);
        }
        
        console.log(`✅ Generated ${this.nodeDefinitions.size} documentation files`);
    }

    /**
     * Generate documentation for a single node
     */
    generateNodeDocument(node: NodeDefinition): string {
        const nodeType = node.packageName === '@n8n/n8n-nodes-langchain' 
            ? `@n8n/n8n-nodes-langchain.${node.type}`
            : `n8n-nodes-base.${node.type}`;
            
        const parametersYaml = this.generateParametersYaml(node.properties);
        
        return `# ${node.displayName}

## Description

${node.description}

**Version**: ${node.version}

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

\`\`\`yaml
nodes:
  - id: \${unique-node-id}
    name: ${node.displayName}
    parameters:
${parametersYaml}
    position: [x, y]  # Canvas position coordinates
    type: ${nodeType}
\`\`\`

## Parameters

${this.generateParametersDocumentation(node.properties)}

## Node Information

- **Node Type**: \`${nodeType}\`
- **Display Name**: ${node.displayName}
- **Internal Name**: \`${node.name}\`
- **Package**: \`${node.packageName}\`
- **Category**: ${node.packageName === '@n8n/n8n-nodes-langchain' ? 'AI/LangChain' : 'Based on file location in n8n repository'}

## Resources

- [Official N8N Documentation](${node.docsUrl}) - Complete parameter reference
- [Source Code](${node.sourceUrl}) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n ${node.version} source code*
`;
    }

    /**
     * Generate YAML parameters configuration
     */
    generateParametersYaml(properties: any[]): string {
        if (!properties || properties.length === 0) {
            return '      # No parameters available';
        }
        
        const yamlLines: string[] = [];
        
        for (const prop of properties) {
            const comment = prop.description ? ` # ${prop.description}` : '';
            
            if (prop.type === 'collection' && prop.options && prop.options.length > 0) {
                yamlLines.push(`      ${prop.name}:${comment}`);
                for (const option of prop.options) {
                    const optionComment = option.description ? ` # ${option.description}` : '';
                    const defaultValue = this.formatDefaultValue(option.default, option.type);
                    yamlLines.push(`        ${option.name}: ${defaultValue}${optionComment}`);
                }
            } else {
                const defaultValue = this.formatDefaultValue(prop.default, prop.type);
                yamlLines.push(`      ${prop.name}: ${defaultValue}${comment}`);
            }
        }
        
        return yamlLines.join('\n');
    }

    /**
     * Format default value for YAML output
     */
    formatDefaultValue(defaultValue: any, type: string): string {
        if (defaultValue === undefined || defaultValue === null) {
            if (type === 'boolean') return 'false';
            if (type === 'number') return '0';
            if (type === 'json') return '{}';
            return '""';
        }
        
        if (typeof defaultValue === 'string') {
            if (defaultValue === '' || defaultValue === '{}' || defaultValue === '[]') {
                return defaultValue === '' ? '""' : defaultValue;
            }
            return `"${defaultValue}"`;
        }
        
        if (typeof defaultValue === 'boolean') {
            return defaultValue.toString();
        }
        
        if (typeof defaultValue === 'number') {
            return defaultValue.toString();
        }
        
        return JSON.stringify(defaultValue);
    }

    /**
     * Generate parameters documentation section
     */
    generateParametersDocumentation(properties: any[]): string {
        if (!properties || properties.length === 0) {
            return 'This node has no configurable parameters.';
        }
        
        const docs: string[] = [];
        
        for (const prop of properties) {
            docs.push(`### ${prop.displayName || prop.name}`);
            docs.push('');
            docs.push(`- **Name**: \`${prop.name}\``);
            docs.push(`- **Type**: \`${prop.type}\``);
            if (prop.default !== undefined) {
                docs.push(`- **Default**: \`${JSON.stringify(prop.default)}\``);
            }
            if (prop.description) {
                docs.push(`- **Description**: ${prop.description}`);
            }
            if (prop.placeholder) {
                docs.push(`- **Placeholder**: ${prop.placeholder}`);
            }
            
            if (prop.type === 'collection' && prop.options && prop.options.length > 0) {
                docs.push('');
                docs.push('**Options:**');
                docs.push('');
                for (const option of prop.options) {
                    docs.push(`#### ${option.displayName || option.name}`);
                    docs.push(`- **Name**: \`${option.name}\``);
                    docs.push(`- **Type**: \`${option.type}\``);
                    if (option.default !== undefined) {
                        docs.push(`- **Default**: \`${JSON.stringify(option.default)}\``);
                    }
                    if (option.description) {
                        docs.push(`- **Description**: ${option.description}`);
                    }
                    docs.push('');
                }
            }
            
            docs.push('');
        }
        
        return docs.join('\n');
    }

    /**
     * Generate index file with all nodes
     */
    generateIndex(): void {
        console.log('📋 Generating index file...');
        
        const sortedNodes = Array.from(this.nodeDefinitions.values())
            .sort((a, b) => a.displayName.localeCompare(b.displayName));

        const indexContent = `# N8N Nodes Documentation

Documentation for ${sortedNodes.length} n8n nodes, generated from the official n8n repository.

## Quick Reference for n8n-cli

Each node can be used in n8n-cli workflows with the format:

\`\`\`yaml
nodes:
  - id: \${unique-id}
    name: Node Display Name
    parameters: {}  # See individual node docs
    position: [x, y]
    type: n8n-nodes-base.nodeName
\`\`\`

## Available Nodes (${sortedNodes.length})

### Standard Nodes
${sortedNodes.filter(n => n.packageName !== '@n8n/n8n-nodes-langchain').map(node => 
    `- [${node.displayName}](./${node.type}.md) (\`n8n-nodes-base.${node.type}\`) - ${node.description.substring(0, 80)}${node.description.length > 80 ? '...' : ''}`
).join('\n')}

### LangChain AI Nodes
${sortedNodes.filter(n => n.packageName === '@n8n/n8n-nodes-langchain').map(node => 
    `- [${node.displayName}](./langchain.${node.type}.md) (\`@n8n/n8n-nodes-langchain.${node.type}\`) - ${node.description.substring(0, 80)}${node.description.length > 80 ? '...' : ''}`
).join('\n') || 'No LangChain nodes found - ensure @n8n/n8n-nodes-langchain is installed in the n8n repository'}

## Usage with n8n-cli

1. **Install n8n-cli**: \`npm install -g @edenreich/n8n-cli\`
2. **Reference nodes**: Use the \`n8n-nodes-base.{nodeName}\` format shown in each node's documentation
3. **Configure parameters**: Check the official n8n documentation links in each node doc
4. **Sync workflows**: Use n8n-cli to push your YAML workflows to n8n

## Resources

- [n8n-cli Repository](https://github.com/edenreich/n8n-cli) - YAML-based n8n workflow management
- [Official n8n Documentation](https://docs.n8n.io/) - Complete parameter references
- [n8n Source Code](https://github.com/n8n-io/n8n) - TypeScript implementations

## Generation Stats

- **Nodes Documented**: ${sortedNodes.length}
- **Generated**: ${new Date().toISOString()}

---
*Generated from n8n source code for n8n-cli compatibility*
`;

        fs.writeFileSync(path.join(this.outputPath, 'README.md'), indexContent);
        console.log('✅ Index file generated');
    }

    /**
     * Generate documentation URL
     */
    generateDocsUrl(nodeName: string, packageName: string = 'n8n-nodes-base'): string {
        if (packageName === '@n8n/n8n-nodes-langchain') {
            // LangChain nodes have different URL structure
            return `https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.${nodeName.toLowerCase()}/`;
        }
        const category = this.isCorePrimaryNode(nodeName) ? 'core-nodes' : 'app-nodes';
        return `https://docs.n8n.io/integrations/builtin/${category}/n8n-nodes-base.${nodeName.toLowerCase()}/`;
    }

    /**
     * Determine if a node is a core node (vs app node)
     */
    isCorePrimaryNode(nodeName: string): boolean {
        const coreNodes = new Set([
            // Trigger nodes
            'webhook', 'manualTrigger', 'scheduleTrigger', 'workflowTrigger',
            'executionTrigger', 'errorTrigger', 'emailReadImap', 'formTrigger',
            'ssesTrigger', 'localFileTrigger', 'rssFeedTrigger', 'chatTrigger',
            'evaluationTrigger', 'executeSubworkflowTrigger', 'mcpServerTrigger',
            'n8nTrigger', 'activationTrigger',
            
            // Transform/Logic nodes
            'if', 'switch', 'merge', 'set', 'filter', 'sort', 'aggregate',
            'removeDuplicates', 'splitInBatches', 'itemLists', 'limit',
            'renameKeys', 'splitOut', 'compareDatasets', 'comparedatasets',
            
            // Utility nodes
            'code', 'noOp', 'stopAndError', 'wait', 'httpRequest', 'webhook',
            'respondToWebhook', 'respondToChat', 'executeCommand', 'executeSubworkflow',
            'executionData', 'debugHelper',
            
            // File/Data nodes
            'readWriteFile', 'extractFromFile', 'convertToFile', 'compression',
            'spreadsheetFile', 'editImage',
            
            // Communication nodes
            'emailSend', 'rss',
            
            // Crypto/Security nodes
            'crypto', 'jwt', 'totp',
            
            // Network/Protocol nodes
            'ftp', 'ssh', 'ldap', 'graphql',
            
            // Format/Parse nodes
            'html', 'xml', 'markdown', 'dateTime',
            
            // AI/ML nodes
            'aiTransform', 'summarize',
            
            // Development nodes
            'git', 'n8n', 'n8nForm', 'evaluation'
        ]);
        
        const isCore = coreNodes.has(nodeName.toLowerCase());
        return isCore;
    }

    /**
     * Generate source URL
     */
    generateSourceUrl(filePath: string): string {
        const relativePath = filePath.replace(this.n8nPath, '');
        return `https://github.com/n8n-io/n8n/blob/master${relativePath}`;
    }

    /**
     * Print generation summary
     */
    printSummary(): void {
        console.log('\n📊 Generation Summary:');
        console.log(`   Nodes processed: ${this.nodeDefinitions.size}`);
        console.log(`   Documentation files: ${this.nodeDefinitions.size}`);
        console.log(`   Errors encountered: ${this.errors.length}`);
        
        if (this.errors.length > 0) {
            console.log('\n⚠️  Errors:');
            this.errors.forEach(error => {
                console.log(`   - ${error.file || error.node}: ${error.error}`);
            });
        }
        
        console.log('\n✅ N8N Node Documentation Generation Complete!');
    }
}

// Run the generator
if (import.meta.main) {
    const generator = new TextBasedN8NDocGenerator();
    generator.generate().catch((error: any) => {
        console.error('💥 Fatal error:', error);
        Deno.exit(1);
    });
}

export default TextBasedN8NDocGenerator;
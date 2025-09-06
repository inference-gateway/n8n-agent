#!/usr/bin/env -S deno run --allow-read --allow-write

/**
 * Text-based N8N Node Documentation Generator
 * 
 * Simply parses TypeScript files as text to extract node definitions.
 * No imports, no JavaScript conversion - just straightforward text parsing.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

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
}

interface ParseError {
    file?: string;
    node?: string;
    error: string;
}

class TextBasedN8NDocGenerator {
    public n8nPath: string;
    public nodesBasePath: string;
    public outputPath: string;
    private nodeDefinitions: Map<string, NodeDefinition>;
    private errors: ParseError[];

    constructor() {
        this.n8nPath = '/tmp/n8n-repo';
        this.nodesBasePath = path.join(this.n8nPath, 'packages', 'nodes-base', 'nodes');
        this.outputPath = path.join(process.cwd(), 'docs', 'nodes');
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
        console.log(`Found ${nodeFiles.length} node files`);

        for (const filePath of nodeFiles) {
            try {
                await this.parseNodeFile(filePath);
            } catch (error: any) {
                this.errors.push({
                    file: path.basename(filePath),
                    error: error.message
                });
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
    async parseNodeFile(filePath: string): Promise<void> {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        const descriptionMatch = fileContent.match(/description:\s*INodeTypeDescription\s*=\s*{([\s\S]*?)^(\s*)}/m);
        if (!descriptionMatch) {
            throw new Error('No INodeTypeDescription found');
        }

        const descriptionContent = descriptionMatch[1];
        
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

        const properties: any[] = [];

        const nodeDefinition: NodeDefinition = {
            displayName,
            name,
            type: name,
            description: description || 'No description available',
            version,
            defaults: {},
            properties,
            filePath,
            docsUrl: this.generateDocsUrl(name),
            sourceUrl: this.generateSourceUrl(filePath)
        };

        this.nodeDefinitions.set(nodeDefinition.type, nodeDefinition);
    }

    /**
     * Extract string property value
     */
    extractStringProperty(content: string, property: string): string {
        const regex = new RegExp(`${property}:\\s*['"\`]([^'"\`]*?)['"\`]`, 's');
        const match = content.match(regex);
        return match ? match[1] : '';
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
      # Configure parameters based on your needs
      # See official documentation for available options
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.${node.type}
\`\`\`

## Node Information

- **Node Type**: \`n8n-nodes-base.${node.type}\`
- **Display Name**: ${node.displayName}
- **Internal Name**: \`${node.name}\`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](${node.docsUrl}) - Complete parameter reference
- [Source Code](${node.sourceUrl}) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

## Notes

This documentation provides basic node information. For detailed parameter configuration, 
refer to the official n8n documentation linked above, which contains:

- Complete parameter reference
- Required vs optional fields
- Parameter types and validation
- Usage examples and workflows
- API integration details

---
*Generated automatically from n8n ${node.version} source code*
`;
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

${sortedNodes.map(node => 
    `- [${node.displayName}](./${node.type}.md) (\`n8n-nodes-base.${node.type}\`) - ${node.description.substring(0, 80)}${node.description.length > 80 ? '...' : ''}`
).join('\n')}

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
- **Parse Errors**: ${this.errors.length}
- **Generated**: ${new Date().toISOString()}

${this.errors.length > 0 ? `### Parse Errors
${this.errors.map(error => `- ${error}`).join('\n')}
` : ''}

---
*Generated from n8n source code for n8n-cli compatibility*
`;

        fs.writeFileSync(path.join(this.outputPath, 'README.md'), indexContent);
        console.log('✅ Index file generated');
    }

    /**
     * Generate documentation URL
     */
    generateDocsUrl(nodeName: string): string {
        return `https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.${nodeName.toLowerCase()}/`;
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
        process.exit(1);
    });
}

export default TextBasedN8NDocGenerator;
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * N8N Node Documentation Generator
 * 
 * This script parses the n8n repository to extract node definitions and generates
 * comprehensive markdown documentation for each node.
 */

class N8NDocGenerator {
    constructor() {
        this.n8nPath = '/tmp/n8n-repo';
        this.nodesBasePath = path.join(this.n8nPath, 'packages', 'nodes-base', 'nodes');
        this.outputPath = path.join(process.cwd(), 'docs', 'nodes');
        this.nodeDefinitions = new Map();
        this.errors = [];
    }

    /**
     * Main entry point for documentation generation
     */
    async generate() {
        console.log('🚀 Starting N8N Node Documentation Generation');
        
        try {
            this.validatePaths();
            this.setupOutputDirectory();
            await this.parseNodes();
            await this.generateDocumentation();
            this.generateIndex();
            this.printSummary();
        } catch (error) {
            console.error('❌ Generation failed:', error.message);
            process.exit(1);
        }
    }

    /**
     * Validate that required paths exist
     */
    validatePaths() {
        if (!fs.existsSync(this.n8nPath)) {
            throw new Error(`N8N repository not found at: ${this.n8nPath}`);
        }

        if (!fs.existsSync(this.nodesBasePath)) {
            throw new Error(`Nodes directory not found at: ${this.nodesBasePath}`);
        }

        console.log('✅ N8N repository paths validated');
    }

    /**
     * Create output directory structure
     */
    setupOutputDirectory() {
        if (!fs.existsSync(this.outputPath)) {
            fs.mkdirSync(this.outputPath, { recursive: true });
        }
        console.log('✅ Output directory prepared');
    }

    /**
     * Parse all node files and extract definitions
     */
    async parseNodes() {
        console.log('📖 Parsing node definitions...');
        
        const nodeFiles = this.findNodeFiles(this.nodesBasePath);
        console.log(`Found ${nodeFiles.length} node files`);

        for (const filePath of nodeFiles) {
            try {
                await this.parseNodeFile(filePath);
            } catch (error) {
                this.errors.push({
                    file: path.relative(this.nodesBasePath, filePath),
                    error: error.message
                });
            }
        }

        console.log(`✅ Parsed ${this.nodeDefinitions.size} nodes with ${this.errors.length} errors`);
    }

    /**
     * Recursively find all .node.ts files
     */
    findNodeFiles(dir, files = []) {
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
     * Parse a single node file and extract definition
     */
    async parseNodeFile(filePath) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const relativePath = path.relative(this.nodesBasePath, filePath);
        
        // Extract node class and description using regex patterns
        const nodeDefinition = this.extractNodeDefinition(content, relativePath);
        
        if (nodeDefinition) {
            this.nodeDefinitions.set(nodeDefinition.type, nodeDefinition);
        }
    }

    /**
     * Extract node definition from TypeScript content
     */
    extractNodeDefinition(content, filePath) {
        try {
            // Find the description object
            const descriptionMatch = content.match(/description:\s*INodeTypeDescription\s*=\s*({[\\s\\S]*?});/);
            if (!descriptionMatch) {
                throw new Error('No INodeTypeDescription found');
            }

            const descriptionStr = descriptionMatch[1];
            
            // Extract basic properties using regex
            const displayName = this.extractProperty(descriptionStr, 'displayName');
            const name = this.extractProperty(descriptionStr, 'name');
            const description = this.extractProperty(descriptionStr, 'description');
            const version = this.extractVersions(descriptionStr);
            const defaults = this.extractDefaults(descriptionStr);
            const properties = this.extractProperties(descriptionStr);

            if (!displayName || !name) {
                throw new Error('Missing required displayName or name');
            }

            // Generate documentation URL and source link
            const docsUrl = this.generateDocsUrl(name);
            const sourceUrl = this.generateSourceUrl(filePath);

            return {
                displayName: displayName.replace(/['"]/g, ''),
                name: name.replace(/['"]/g, ''),
                type: name.replace(/['"]/g, ''),
                description: description ? description.replace(/['"]/g, '') : '',
                version,
                defaults,
                properties: properties || [],
                filePath,
                docsUrl,
                sourceUrl
            };
            
        } catch (error) {
            throw new Error(`Failed to parse ${filePath}: ${error.message}`);
        }
    }

    /**
     * Extract a property value from the description string
     */
    extractProperty(str, propName) {
        const regex = new RegExp(`${propName}:\\s*['"\`]([^'"\`]*?)['"\`]`, 's');
        const match = str.match(regex);
        return match ? match[1] : null;
    }

    /**
     * Extract version information
     */
    extractVersions(str) {
        const versionMatch = str.match(/version:\\s*(\\d+(?:\\.\\d+)*)/);
        return versionMatch ? parseFloat(versionMatch[1]) : 1;
    }

    /**
     * Extract default values
     */
    extractDefaults(str) {
        const defaultsMatch = str.match(/defaults:\\s*({[\\s\\S]*?})/);
        if (!defaultsMatch) return {};
        
        try {
            // Basic parsing of defaults object
            const defaultsStr = defaultsMatch[1];
            const nameMatch = defaultsStr.match(/name:\\s*['"]([^'"]*)['"]/);
            
            return {
                name: nameMatch ? nameMatch[1] : ''
            };
        } catch {
            return {};
        }
    }

    /**
     * Extract properties array
     */
    extractProperties(str) {
        const propertiesMatch = str.match(/properties:\\s*(\\[[\\s\\S]*?\\])/);
        if (!propertiesMatch) return [];
        
        // For now, return basic structure - could be enhanced for full parsing
        return this.parsePropertiesArray(propertiesMatch[1]);
    }

    /**
     * Parse properties array (simplified version)
     */
    parsePropertiesArray(propertiesStr) {
        const properties = [];
        
        // Simple regex to find property objects
        const propertyMatches = propertiesStr.match(/{[^{}]*(?:{[^{}]*}[^{}]*)*}/g) || [];
        
        for (const propMatch of propertyMatches) {
            try {
                const property = this.parseProperty(propMatch);
                if (property) {
                    properties.push(property);
                }
            } catch (error) {
                // Skip malformed properties
            }
        }
        
        return properties;
    }

    /**
     * Parse a single property object
     */
    parseProperty(propStr) {
        const displayName = this.extractProperty(propStr, 'displayName');
        const name = this.extractProperty(propStr, 'name');
        const type = this.extractProperty(propStr, 'type');
        const required = propStr.includes('required: true');
        const description = this.extractProperty(propStr, 'description');
        const defaultValue = this.extractProperty(propStr, 'default');
        
        // Extract options for select/multiOptions types
        const options = this.extractOptions(propStr);
        
        if (!name) return null;
        
        return {
            displayName: displayName || name,
            name: name.replace(/['"]/g, ''),
            type: type ? type.replace(/['"]/g, '') : 'string',
            required,
            description: description || '',
            default: defaultValue,
            options
        };
    }

    /**
     * Extract options for select/multiOptions types
     */
    extractOptions(propStr) {
        const optionsMatch = propStr.match(/options:\\s*(\\[[\\s\\S]*?\\])/);
        if (!optionsMatch) return [];
        
        const optionsStr = optionsMatch[1];
        const options = [];
        
        // Extract option objects
        const optionMatches = optionsStr.match(/{[^{}]*}/g) || [];
        
        for (const optMatch of optionMatches) {
            const name = this.extractProperty(optMatch, 'name');
            const value = this.extractProperty(optMatch, 'value');
            const description = this.extractProperty(optMatch, 'description');
            
            if (name && value) {
                options.push({
                    name: name.replace(/['"]/g, ''),
                    value: value.replace(/['"]/g, ''),
                    description: description || ''
                });
            }
        }
        
        return options;
    }

    /**
     * Generate documentation URL for a node
     */
    generateDocsUrl(nodeName) {
        const baseUrl = 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base';
        return `${baseUrl}.${nodeName.toLowerCase()}/`;
    }

    /**
     * Generate source code URL
     */
    generateSourceUrl(filePath) {
        const baseUrl = 'https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes';
        return `${baseUrl}/${filePath}`;
    }

    /**
     * Generate markdown documentation for all nodes
     */
    async generateDocumentation() {
        console.log('📝 Generating documentation files...');
        
        let generated = 0;
        
        for (const [nodeType, nodeDefinition] of this.nodeDefinitions) {
            try {
                const markdown = this.generateNodeMarkdown(nodeDefinition);
                const filename = `${nodeType}.md`;
                const filepath = path.join(this.outputPath, filename);
                
                fs.writeFileSync(filepath, markdown);
                generated++;
            } catch (error) {
                this.errors.push({
                    node: nodeType,
                    error: `Failed to generate documentation: ${error.message}`
                });
            }
        }
        
        console.log(`✅ Generated ${generated} documentation files`);
    }

    /**
     * Generate markdown content for a single node
     */
    generateNodeMarkdown(node) {
        return `# ${node.displayName}

## Description
${node.description || 'No description available.'}

## Node Information
- **Type**: \`${node.type}\`
- **Version**: ${node.version}
- **Category**: N8N Core Node

## Parameters

${this.generateParametersSection(node.properties)}

## Schema Structure

\`\`\`typescript
// Node Type: ${node.type}
// Display Name: ${node.displayName}
// Version: ${node.version}

interface I${node.displayName}Properties {
${node.properties.map(prop => `  ${prop.name}: ${prop.type}; // ${prop.description}`).join('\\n')}
}
\`\`\`

## Workflow Example

\`\`\`yaml
nodes:
  - name: ${node.displayName} Example
    parameters:
${this.generateExampleParameters(node.properties)}
    type: n8n-nodes-base.${node.type}
\`\`\`

## Resources
- [Official Documentation](${node.docsUrl})
- [Node Source Code](${node.sourceUrl})

---
*Documentation generated from n8n repository on ${new Date().toISOString()}*
`;
    }

    /**
     * Generate parameters section
     */
    generateParametersSection(properties) {
        if (!properties.length) {
            return 'No parameters available.';
        }

        return properties.map(prop => {
            let section = `### ${prop.displayName}\\n`;
            section += `- **Name**: \`${prop.name}\`\\n`;
            section += `- **Type**: \`${prop.type}\`\\n`;
            section += `- **Required**: ${prop.required ? 'Yes' : 'No'}\\n`;
            
            if (prop.default !== undefined && prop.default !== null) {
                section += `- **Default**: \`${prop.default}\`\\n`;
            }
            
            if (prop.description) {
                section += `- **Description**: ${prop.description}\\n`;
            }
            
            if (prop.options && prop.options.length > 0) {
                section += `- **Options**:\\n`;
                prop.options.forEach(option => {
                    section += `  - \`${option.value}\`: ${option.name}${option.description ? ` - ${option.description}` : ''}\\n`;
                });
            }
            
            return section;
        }).join('\\n');
    }

    /**
     * Generate example parameters for workflow
     */
    generateExampleParameters(properties) {
        if (!properties.length) {
            return '      # No parameters required';
        }

        return properties
            .filter(prop => prop.required || prop.default !== undefined)
            .map(prop => {
                const value = prop.default !== undefined ? prop.default : 
                             prop.type === 'boolean' ? false :
                             prop.type === 'number' ? 0 :
                             prop.options && prop.options.length > 0 ? prop.options[0].value :
                             `"${prop.name}_value"`;
                return `      ${prop.name}: ${typeof value === 'string' && !value.startsWith('"') ? `"${value}"` : value}`;
            })
            .join('\\n');
    }

    /**
     * Generate index file with all nodes
     */
    generateIndex() {
        console.log('📋 Generating index file...');
        
        const sortedNodes = Array.from(this.nodeDefinitions.values())
            .sort((a, b) => a.displayName.localeCompare(b.displayName));

        const indexContent = `# N8N Nodes Documentation

This directory contains comprehensive documentation for N8N nodes, automatically generated from the official n8n repository.

## Available Nodes (${sortedNodes.length})

${sortedNodes.map(node => 
    `- [${node.displayName}](./${node.type}.md) - ${node.description.substring(0, 100)}${node.description.length > 100 ? '...' : ''}`
).join('\\n')}

## Documentation Structure

Each node documentation includes:
- **Description**: Detailed explanation of the node's purpose
- **Parameters**: Complete parameter list with types, requirements, and descriptions
- **Schema Structure**: TypeScript interface definitions
- **Workflow Example**: YAML example in n8n-cli format
- **Resources**: Links to official documentation and source code

## Generation Information

- **Generated**: ${new Date().toISOString()}
- **Source**: n8n repository (https://github.com/n8n-io/n8n)
- **Nodes Parsed**: ${this.nodeDefinitions.size}
- **Errors**: ${this.errors.length}

${this.errors.length > 0 ? `
## Parse Errors

The following files had parsing errors and may need manual review:

${this.errors.map(error => `- \`${error.file || error.node}\`: ${error.error}`).join('\\n')}
` : ''}

---
*This documentation is automatically generated. Do not edit manually.*
`;

        const indexPath = path.join(this.outputPath, 'README.md');
        fs.writeFileSync(indexPath, indexContent);
        
        console.log('✅ Index file generated');
    }

    /**
     * Print generation summary
     */
    printSummary() {
        console.log('\\n📊 Generation Summary:');
        console.log(`   Nodes processed: ${this.nodeDefinitions.size}`);
        console.log(`   Documentation files: ${this.nodeDefinitions.size}`);
        console.log(`   Errors encountered: ${this.errors.length}`);
        
        if (this.errors.length > 0) {
            console.log('\\n⚠️  Errors:');
            this.errors.forEach(error => {
                console.log(`   - ${error.file || error.node}: ${error.error}`);
            });
        }
        
        console.log('\\n✅ N8N Node Documentation Generation Complete!');
    }
}

// Run the generator
if (require.main === module) {
    const generator = new N8NDocGenerator();
    generator.generate().catch(error => {
        console.error('💥 Fatal error:', error);
        process.exit(1);
    });
}

module.exports = N8NDocGenerator;
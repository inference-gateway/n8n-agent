#!/usr/bin/env node

/**
 * Test script for N8N Documentation Generator
 * 
 * This script tests the generator with mock data to ensure
 * proper functionality before running on actual n8n repository.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

class GeneratorTester {
    private testDir: string;
    private mockN8nPath: string;
    private mockNodesPath: string;
    private outputPath: string;

    constructor() {
        this.testDir = path.join(process.cwd(), 'test-tmp');
        this.mockN8nPath = path.join(this.testDir, 'mock-n8n');
        this.mockNodesPath = path.join(this.mockN8nPath, 'packages', 'nodes-base', 'nodes');
        this.outputPath = path.join(this.testDir, 'test-docs');
    }

    /**
     * Run all tests
     */
    async runTests(): Promise<void> {
        console.log('🧪 Starting Generator Tests');
        
        try {
            this.setupTestEnvironment();
            this.createMockNodeFiles();
            await this.testGenerator();
            this.validateOutput();
            this.cleanup();
            
            console.log('✅ All tests passed!');
        } catch (error: any) {
            console.error('❌ Test failed:', error.message);
            this.cleanup();
            process.exit(1);
        }
    }

    /**
     * Setup test directories
     */
    setupTestEnvironment() {
        console.log('📁 Setting up test environment...');
        
        if (fs.existsSync(this.testDir)) {
            fs.rmSync(this.testDir, { recursive: true, force: true });
        }
        
        fs.mkdirSync(this.testDir, { recursive: true });
        fs.mkdirSync(this.mockNodesPath, { recursive: true });
        fs.mkdirSync(this.outputPath, { recursive: true });
        
        console.log('✅ Test environment ready');
    }

    /**
     * Create mock node files for testing
     */
    createMockNodeFiles() {
        console.log('📝 Creating mock node files...');
        
        const webhookNode = `import { INodeTypeDescription } from 'n8n-workflow';

export class Webhook implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Webhook',
        name: 'webhook',
        icon: 'file:webhook.svg',
        group: ['trigger'],
        version: 1,
        description: 'Receive HTTP requests and trigger workflows',
        defaults: {
            name: 'Webhook',
        },
        inputs: [],
        outputs: ['main'],
        properties: [
            {
                displayName: 'HTTP Method',
                name: 'httpMethod',
                type: 'options',
                options: [
                    {
                        name: 'GET',
                        value: 'GET',
                    },
                    {
                        name: 'POST',
                        value: 'POST',
                    },
                ],
                default: 'GET',
                required: true,
                description: 'The HTTP method to use',
            },
            {
                displayName: 'Path',
                name: 'path',
                type: 'string',
                default: '',
                placeholder: 'webhook-path',
                required: true,
                description: 'The path for the webhook URL',
            },
        ],
    };
}
`;

        const httpNode = `import { INodeTypeDescription } from 'n8n-workflow';

export class HttpRequest implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'HTTP Request',
        name: 'httpRequest',
        icon: 'fa:server',
        group: ['output'],
        version: 2,
        description: 'Make HTTP requests to external APIs',
        defaults: {
            name: 'HTTP Request',
        },
        inputs: ['main'],
        outputs: ['main'],
        properties: [
            {
                displayName: 'URL',
                name: 'url',
                type: 'string',
                default: '',
                required: true,
                description: 'The URL to make the request to',
            },
            {
                displayName: 'Method',
                name: 'method',
                type: 'options',
                options: [
                    { name: 'GET', value: 'GET' },
                    { name: 'POST', value: 'POST' },
                    { name: 'PUT', value: 'PUT' },
                    { name: 'DELETE', value: 'DELETE' },
                ],
                default: 'GET',
                required: false,
                description: 'HTTP method to use for the request',
            },
            {
                displayName: 'Send Body',
                name: 'sendBody',
                type: 'boolean',
                default: false,
                required: false,
                description: 'Whether to send a body with the request',
            },
        ],
    };
}
`;

        fs.writeFileSync(path.join(this.mockNodesPath, 'Webhook.node.ts'), webhookNode);
        fs.writeFileSync(path.join(this.mockNodesPath, 'HttpRequest.node.ts'), httpNode);
        
        console.log('✅ Mock node files created');
    }

    /**
     * Test the generator with mock data
     */
    async testGenerator() {
        console.log('🚀 Testing generator...');
        
        const { default: GeneratorClass } = await import('./generate-n8n-docs.ts');
        
        const generator = new GeneratorClass();
        generator.n8nPath = this.mockN8nPath;
        generator.nodesBasePath = this.mockNodesPath;
        generator.outputPath = this.outputPath;
        
        await generator.generate();
        
        console.log('✅ Generator completed successfully');
    }

    /**
     * Validate the generated output
     */
    validateOutput() {
        console.log('🔍 Validating output...');
        
        const expectedFiles = [
            'README.md',
            'webhook.md',
            'httpRequest.md'
        ];
        
        for (const file of expectedFiles) {
            const filePath = path.join(this.outputPath, file);
            if (!fs.existsSync(filePath)) {
                throw new Error(`Expected file not found: ${file}`);
            }
            
            const content = fs.readFileSync(filePath, 'utf-8');
            if (content.length < 100) {
                throw new Error(`File too short, possibly malformed: ${file}`);
            }
        }
        
        this.validateWebhookDoc();
        this.validateHttpRequestDoc();
        this.validateIndexDoc();
        
        console.log('✅ Output validation passed');
    }

    /**
     * Validate webhook documentation
     */
    validateWebhookDoc() {
        const webhookPath = path.join(this.outputPath, 'webhook.md');
        const content = fs.readFileSync(webhookPath, 'utf-8');
        
        const requiredSections = [
            '# Webhook',
            '## Description',
            '## Parameters',
            '### HTTP Method',
            '### Path',
            '## Schema Structure',
            '## Workflow Example',
            '## Resources'
        ];
        
        for (const section of requiredSections) {
            if (!content.includes(section)) {
                throw new Error(`Missing section in webhook.md: ${section}`);
            }
        }

        if (!content.includes('**Required**: Yes') || !content.includes('**Type**: `options`')) {
            throw new Error('Missing parameter details in webhook.md');
        }
    }

    /**
     * Validate HTTP Request documentation
     */
    validateHttpRequestDoc() {
        const httpPath = path.join(this.outputPath, 'httpRequest.md');
        const content = fs.readFileSync(httpPath, 'utf-8');
        
        if (!content.includes('**Version**: 2')) {
            throw new Error('Missing version information in httpRequest.md');
        }
        
        if (!content.includes('**Type**: `boolean`')) {
            throw new Error('Missing boolean parameter type in httpRequest.md');
        }
    }

    /**
     * Validate index documentation
     */
    validateIndexDoc() {
        const indexPath = path.join(this.outputPath, 'README.md');
        const content = fs.readFileSync(indexPath, 'utf-8');

        if (!content.includes('Available Nodes (2)')) {
            throw new Error('Incorrect node count in index');
        }
        
        if (!content.includes('[Webhook](./webhook.md)') || 
            !content.includes('[HTTP Request](./httpRequest.md)')) {
            throw new Error('Missing node links in index');
        }
    }

    /**
     * Clean up test files
     */
    cleanup() {
        if (fs.existsSync(this.testDir)) {
            fs.rmSync(this.testDir, { recursive: true, force: true });
        }
        console.log('🧹 Test cleanup completed');
    }
}

// Run tests if called directly
if (import.meta.main) {
    const tester = new GeneratorTester();
    tester.runTests().catch((error: any) => {
        console.error('💥 Test runner failed:', error);
        process.exit(1);
    });
}

export default GeneratorTester;

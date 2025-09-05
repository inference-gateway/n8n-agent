# N8N Node Documentation Generator

## Overview

The N8N Node Documentation Generator is an automated system that generates comprehensive documentation for all N8N nodes by parsing TypeScript definitions from the official n8n repository. This documentation is specifically formatted for LLM consumption and agent workflows.

## Features

### 🤖 Automated Generation
- **GitHub Actions Integration**: Manual trigger via workflow_dispatch
- **TypeScript Parsing**: Extracts `INodeTypeDescription` and `INodeProperties` interfaces
- **Complete Coverage**: Processes all nodes in `/packages/nodes-base/nodes/`
- **Version Handling**: Supports versioned nodes (V1, V2, V3 directories)

### 📝 Comprehensive Documentation
- **Parameter Details**: Types, requirements, defaults, descriptions, options
- **Schema Structure**: TypeScript interface definitions
- **Workflow Examples**: YAML examples matching n8n-cli format
- **Resource Links**: Official documentation and source code links

### 🔄 Automated Workflow
- **Pull Request Creation**: Automated PRs for human review
- **Change Detection**: Only creates PRs when updates are needed
- **Error Handling**: Comprehensive error logging and reporting
- **Branch Management**: Automatic branch creation and cleanup

## Architecture

### Components

```
├── .github/workflows/update-n8n-docs.yml    # GitHub Actions workflow
├── scripts/generate-n8n-docs.js             # Main generation script
├── docs/nodes/                               # Generated documentation
│   ├── README.md                            # Index and overview
│   ├── Webhook.md                           # Example node documentation
│   └── ...                                  # Additional node docs
├── package.json                             # Node.js dependencies
└── docs/N8N_DOCUMENTATION_GENERATOR.md     # This documentation
```

### Workflow Process

1. **Manual Trigger**: GitHub Actions workflow triggered via workflow_dispatch
2. **Repository Setup**: Clones n8n repository and installs dependencies  
3. **Node Discovery**: Recursively finds all `.node.ts` files
4. **TypeScript Parsing**: Extracts node definitions using regex patterns
5. **Documentation Generation**: Creates markdown files for each node
6. **Change Detection**: Compares with existing documentation
7. **Pull Request**: Creates PR with changes for human review

## Usage

### Manual Execution

Trigger the documentation update workflow:

1. Go to Actions tab in GitHub repository
2. Select "Update N8N Node Documentation" workflow
3. Click "Run workflow"
4. Choose whether to create a pull request (default: true)

### Programmatic Execution

Run the generation script locally:

```bash
# Install dependencies
npm install

# Clone n8n repository
git clone --depth 1 https://github.com/n8n-io/n8n.git /tmp/n8n-repo

# Generate documentation
npm run generate-docs
```

## Generated Documentation Format

Each node generates a markdown file with this structure:

### File Name
`{NodeType}.md` (e.g., `Webhook.md`, `HttpRequest.md`)

### Content Structure

```markdown
# Node Display Name

## Description
[Node description from TypeScript definition]

## Node Information
- **Type**: node_type
- **Version**: version_number
- **Category**: N8N Core Node

## Parameters

### Parameter Name
- **Name**: parameter_name
- **Type**: parameter_type  
- **Required**: Yes/No
- **Default**: default_value
- **Description**: parameter description
- **Options**: available options (for select types)

## Schema Structure
[TypeScript interface definition]

## Workflow Example
[YAML workflow example in n8n-cli format]

## Resources
- [Official Documentation](docs_url)
- [Node Source Code](source_url)
```

## Technical Implementation

### TypeScript Parsing

The generator uses regex-based parsing to extract:

- **INodeTypeDescription**: Main node definition object
- **Basic Properties**: displayName, name, description, version
- **INodeProperties[]**: Parameter definitions array
- **Property Details**: type, required, default, description, options
- **Complex Types**: collection, fixedCollection, options, multiOptions
- **Conditional Display**: displayOptions parsing (basic support)

### Error Handling

Comprehensive error handling includes:

- **File Access Errors**: Missing files, permission issues
- **Parse Errors**: Malformed TypeScript, missing properties
- **Generation Errors**: Template rendering, file writing issues
- **Validation Errors**: Missing required fields, invalid structures

All errors are logged and included in the generation summary.

### Performance Optimizations

- **Shallow Clone**: Uses `--depth 1` for faster n8n repository cloning
- **Regex Parsing**: Fast pattern matching instead of full AST parsing
- **Batch Processing**: Processes all nodes in memory before writing
- **Change Detection**: Only updates files when content changes

## Configuration

### Environment Variables

The GitHub Actions workflow supports these inputs:

- `create_pr`: Create pull request with generated documentation (default: true)

### Script Configuration

Modify these constants in `scripts/generate-n8n-docs.js`:

```javascript
this.n8nPath = '/tmp/n8n-repo';                    // N8N repository path
this.nodesBasePath = 'packages/nodes-base/nodes';  // Nodes directory
this.outputPath = 'docs/nodes';                    // Output directory
```

## Maintenance

### Regular Updates

The documentation should be updated regularly to capture:

- **New Nodes**: Recently added to n8n repository
- **Parameter Changes**: Updates to existing node parameters
- **Version Updates**: New versions of existing nodes
- **Description Changes**: Updated node descriptions and documentation

### Manual Review Process

Generated pull requests should be reviewed for:

- **Accuracy**: Parameter descriptions and types
- **Completeness**: All nodes properly documented
- **Formatting**: Consistent markdown structure
- **Examples**: Valid workflow YAML syntax
- **Links**: Working documentation and source URLs

## Troubleshooting

### Common Issues

**N8N Repository Access**
```bash
Error: N8N repository not found at: /tmp/n8n-repo
```
- Solution: Ensure git clone succeeded in workflow

**TypeScript Parsing Errors**
```bash
Failed to parse NodeName: Missing required displayName or name
```  
- Solution: Check node file structure, may need parser updates

**Permission Errors**
```bash
EACCES: permission denied, mkdir 'docs/nodes'
```
- Solution: Verify workflow permissions include `contents: write`

**Generate Script Errors**
```bash
Error: no test specified
```
- Solution: Run `npm run generate-docs` instead of `npm test`

### Debug Mode

Enable verbose logging by modifying the script:

```javascript
console.log('🔍 Debug info:', {
    nodeType,
    properties: properties.length,
    errors: this.errors.length
});
```

## Future Enhancements

### Planned Improvements

1. **Full AST Parsing**: Replace regex with TypeScript compiler API
2. **Enhanced Templates**: More sophisticated markdown generation
3. **Validation Testing**: Automated tests for generated documentation
4. **Interactive Examples**: Runnable workflow examples
5. **Search Integration**: Full-text search across documentation
6. **API Documentation**: REST API endpoint documentation
7. **Change Tracking**: Detailed diff reports in pull requests

### Contributing

To contribute improvements:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/enhancement-name`
3. Modify `scripts/generate-n8n-docs.js` or workflow files
4. Test with: `npm run generate-docs`
5. Submit pull request with test results

## Security Considerations

- **Repository Access**: Read-only access to n8n repository
- **File Permissions**: Limited to docs directory modifications
- **Secrets Management**: No secrets required for public repository access
- **Workflow Permissions**: Minimal required permissions (contents:write, pull-requests:write)

---

*This documentation is part of the N8N Agent project and follows the A2A protocol implementation guidelines.*
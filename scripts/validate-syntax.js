#!/usr/bin/env node

/**
 * Syntax validation script
 * Validates JavaScript syntax of generated files
 */

const fs = require('fs');
const path = require('path');

function validateJavaScriptSyntax(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        new Function(content);
        return true;
    } catch (error) {
        console.error(`❌ Syntax error in ${filePath}:`, error.message);
        return false;
    }
}

function validateWorkflowYaml(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        // Basic YAML syntax check - ensure proper indentation and structure
        const lines = content.split('\n');
        let indentLevel = 0;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.trim() && !line.startsWith('#')) {
                const currentIndent = line.match(/^ */)[0].length;
                // Basic indentation validation
                if (currentIndent % 2 !== 0) {
                    console.error(`❌ Invalid indentation at line ${i + 1} in ${filePath}`);
                    return false;
                }
            }
        }
        
        // Check for required workflow keys
        if (!content.includes('name:') || !content.includes('on:') || !content.includes('jobs:')) {
            console.error(`❌ Missing required workflow keys in ${filePath}`);
            return false;
        }
        
        return true;
    } catch (error) {
        console.error(`❌ Error validating ${filePath}:`, error.message);
        return false;
    }
}

function main() {
    console.log('🔍 Validating implementation syntax...');
    
    const files = [
        'scripts/generate-n8n-docs.js',
        'scripts/test-generator.js',
        'scripts/validate-syntax.js'
    ];
    
    const workflows = [
        '.github/workflows/update-n8n-docs.yml'
    ];
    
    let allValid = true;
    
    // Validate JavaScript files
    for (const file of files) {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
            const isValid = validateJavaScriptSyntax(filePath);
            console.log(`${isValid ? '✅' : '❌'} ${file}`);
            allValid = allValid && isValid;
        }
    }
    
    // Validate YAML workflows
    for (const file of workflows) {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
            const isValid = validateWorkflowYaml(filePath);
            console.log(`${isValid ? '✅' : '❌'} ${file}`);
            allValid = allValid && isValid;
        }
    }
    
    if (allValid) {
        console.log('✅ All files pass syntax validation');
        process.exit(0);
    } else {
        console.log('❌ Some files failed syntax validation');
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

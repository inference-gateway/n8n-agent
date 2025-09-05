# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a n8n-agent A2A (Agent-to-Agent) server generated from ADL (Agent Definition Language). The project is designed to implement agent-to-agent communication capabilities with the following core functionality:

A helpful AI agent

## Core Architecture

### Generated Components

- **Main Server**: `main.go` - HTTP server entry point with 8080 port
- **Agent Configuration**: `.well-known/agent.json` - Agent metadata and capabilities



### Key Features

- **Streaming Support**: Real-time response streaming enabled





## Development Guidelines

### Code Patterns and Conventions

- Use standard Go project layout with clear separation of concerns
- Implement proper error handling with context using `fmt.Errorf("context: %w", err)`  
- Follow Go naming conventions (PascalCase for exported, camelCase for internal)
- Use interfaces for testability and dependency injection
- Structure handler functions to be easily testable
- Use table-driven tests for comprehensive test coverage


### Skills Implementation

The TODO placeholders in the skills files should be replaced with actual business logic. Each skill represents a specific capability or function of your agent:


No skills defined - this is a minimal agent template.


### Agent Integration





**System Prompt**: You are a helpful AI assistant.


Key configuration:




### Testing Strategy

- **Unit Tests**: Test each skill and handler function in isolation
- **Integration Tests**: Test the complete agent workflow end-to-end
- **API Tests**: Validate all HTTP endpoints and their responses
- **Agent Tests**: Test AI provider integration and responses


Run tests with: `task test` or `go test ./...`


### Development Workflow

1. **Implement Skills**: Start by implementing the TODO placeholders in skill files
2. **Add Tests**: Write comprehensive tests for each skill
3. **Configure Agent**: Update agent configuration as needed
4. **Test Integration**: Run full integration tests

5. **Build & Run**: Use `task build` and `task run` commands


### Environment Setup



This project includes **Flox** environment configuration for reproducible development.




Configure the required environment variables for your AI provider and other settings as needed.

## Important Reminders

- Focus on implementing the business logic in TODO placeholders
- Follow the established code patterns and conventions  
- Write comprehensive tests for all functionality
- Ensure proper error handling throughout
- Keep the agent's core purpose and capabilities in mind while implementing
- The generated scaffolding provides structure - implement the specific agent behavior

Remember: This agent is designed to a helpful ai agent. Keep this core purpose in focus while implementing features.

# Changelog

All notable changes to this project will be documented in this file.

## [0.2.1](https://github.com/inference-gateway/n8n-agent/compare/v0.2.0...v0.2.1) (2025-10-20)

### 🔧 Miscellaneous

* **deps:** Update ADL CLI version to 0.23.11 and add validate_n8n_workflow skill ([12b2c8a](https://github.com/inference-gateway/n8n-agent/commit/12b2c8abe03d3347f4d782c55197c4bfaae99f5f))

## [0.2.0](https://github.com/inference-gateway/n8n-agent/compare/v0.1.13...v0.2.0) (2025-10-14)

### ✨ Features

* Enable artifacts and update ADL generated files ([#11](https://github.com/inference-gateway/n8n-agent/issues/11)) ([b2fef70](https://github.com/inference-gateway/n8n-agent/commit/b2fef7097e7d5a75d47a40d28cd81cf78b855e01))
* Update ADL CLI version and regenerate files ([67d9b7b](https://github.com/inference-gateway/n8n-agent/commit/67d9b7b4ba9e79ba6a172badb0c9297d3238650e))
* **validation:** Add N8N workflow validation skill ([c087ab0](https://github.com/inference-gateway/n8n-agent/commit/c087ab0c5e0a8f7dc1beffe57e828a6683124bf4))
* **validation:** Add N8N workflow validation skill ([#14](https://github.com/inference-gateway/n8n-agent/issues/14)) ([e02fdf7](https://github.com/inference-gateway/n8n-agent/commit/e02fdf72314c0dc740d8605e0744dbaf797c570b)), closes [#issue-12](https://github.com/inference-gateway/n8n-agent/issues/issue-12)

### ♻️ Improvements

* Remove generate_n8n_workflow skill and update documentation for workflow generation process ([ab9a53e](https://github.com/inference-gateway/n8n-agent/commit/ab9a53e9ef641406ad9fedbc7e2d96ff576130c2))
* **test:** Replace custom contains function with strings.Contains ([dc10d14](https://github.com/inference-gateway/n8n-agent/commit/dc10d14f1aa393c4e0167e615adeb3b68d4e284c))
* Update workflow generation process in documentation and configuration ([b433f19](https://github.com/inference-gateway/n8n-agent/commit/b433f19294cf778a312348b489deed895c598aa8))

### 🐛 Bug Fixes

* Add missing container names for cli and a2a-debugger services in docker-compose.yaml ([f6be58e](https://github.com/inference-gateway/n8n-agent/commit/f6be58eb814b53648bfe7b133edcfaab354fcfaa))
* Correct environment variable names for A2A agent in docker-compose.yaml ([2591b17](https://github.com/inference-gateway/n8n-agent/commit/2591b17b1e51ce2301e8eaae031b361cc506c8ee))
* Remove duplicate Go package entries in manifest.lock ([67dadf4](https://github.com/inference-gateway/n8n-agent/commit/67dadf4189c86ac0110611490b60b66111c8620d))
* Remove generate_n8n_workflow.go from .adl-ignore file ([1b576ee](https://github.com/inference-gateway/n8n-agent/commit/1b576ee6cd7a9e94d468312690c5a9cf2a4a07db))

### 📚 Documentation

* Add important note on artifact creation for workflows ([b47b52f](https://github.com/inference-gateway/n8n-agent/commit/b47b52f0b787425ad7f5a77a1a642be038885ef0))
* Add important note on artifact creation for workflows in agent.yaml ([b0266f1](https://github.com/inference-gateway/n8n-agent/commit/b0266f134bc5a01e7b228c83e80a20d1db9a6fde))
* Update environment variables in .env.example and docker-compose.yaml for improved configuration ([23a0237](https://github.com/inference-gateway/n8n-agent/commit/23a02378a0e0af540a361114c011c3b5ee7380fc))
* Update environment variables in docker-compose and add .gitignore for downloads ([a9aa574](https://github.com/inference-gateway/n8n-agent/commit/a9aa5744076c9f7a5baf913e3e3222499f376ea8))
* Update N8N node documentation ([cc37cfd](https://github.com/inference-gateway/n8n-agent/commit/cc37cfd96bb8257b893bc0c3a4f892999f672644))
* Update N8N Node Documentation ([#13](https://github.com/inference-gateway/n8n-agent/issues/13)) ([c336ccf](https://github.com/inference-gateway/n8n-agent/commit/c336ccfbee1f8cf3cd126bb6320cae34a0e8051d))
* Update README and docker-compose for task listing and environment variables ([cc95b90](https://github.com/inference-gateway/n8n-agent/commit/cc95b900befe8c459d764fdb59a15003554dd8b3))

### 🔧 Miscellaneous

* Add todos ([f7163fe](https://github.com/inference-gateway/n8n-agent/commit/f7163fed2593a928926eea0555894d6ce1eaaaff))
* Remove redundant inline comments ([f7aa4ba](https://github.com/inference-gateway/n8n-agent/commit/f7aa4ba992ddf67ee5a832c1a1ee1e63968c9817))
* Update go.mod to include gopkg.in/yaml.v3 as a direct dependency ([ad67d76](https://github.com/inference-gateway/n8n-agent/commit/ad67d767e8d9d2d74273af8e4330c8d358225d9f))

## [0.1.13](https://github.com/inference-gateway/n8n-agent/compare/v0.1.12...v0.1.13) (2025-10-07)

### ♻️ Improvements

* Remove go.sum from .adl-ignore file ([b7195fb](https://github.com/inference-gateway/n8n-agent/commit/b7195fb726c5cc97e87dcdee8426c4b735054783))
* Simplify pull request creation and documentation generation steps in update-n8n-docs workflow ([b0c5771](https://github.com/inference-gateway/n8n-agent/commit/b0c5771d748204c53bb05fb609f40a7f643d2a7d))

### 👷 CI

* **deps:** Update actions/checkout to v5 and Deno version to v2.5.2 in update-n8n-docs workflow ([703c614](https://github.com/inference-gateway/n8n-agent/commit/703c614c1caa2ac5c7b348fb0e8b26f887e1c6c7))

### 📚 Documentation

* Update N8N node documentation ([9bf5e03](https://github.com/inference-gateway/n8n-agent/commit/9bf5e037a1f7a7002e16ae920bbfb6cef2cb0338))
* Update N8N Node Documentation ([#10](https://github.com/inference-gateway/n8n-agent/issues/10)) ([cede056](https://github.com/inference-gateway/n8n-agent/commit/cede0569975d631f756b72305af1d83ee361c86c))

### 🔧 Miscellaneous

* **deps:** Update dependencies in manifest.toml ([3d69113](https://github.com/inference-gateway/n8n-agent/commit/3d6911303908be433ec2bd75bae29584f8cad810))
* Update ADL CLI version to 0.23.0 in generated files ([1466d20](https://github.com/inference-gateway/n8n-agent/commit/1466d2043cb692da6e4bad0a4fb80d70ede734b7))

## [0.1.12](https://github.com/inference-gateway/n8n-agent/compare/v0.1.11...v0.1.12) (2025-09-26)

### ♻️ Improvements

* Update ADL CLI version to 0.21.7 in generated files ([cf54d43](https://github.com/inference-gateway/n8n-agent/commit/cf54d433b805c8f53b9da02194f35a115d0e887e))

## [0.1.11](https://github.com/inference-gateway/n8n-agent/compare/v0.1.10...v0.1.11) (2025-09-26)

### ♻️ Improvements

* Run task generate - upgrade adl cli and change agent card url path ([de595ac](https://github.com/inference-gateway/n8n-agent/commit/de595ac3b7775f5c9d015b9019542a59e2d2b4e0))

## [0.1.10](https://github.com/inference-gateway/n8n-agent/compare/v0.1.9...v0.1.10) (2025-09-22)

### 🐛 Bug Fixes

* Update agent description to reflect specialization in n8n workflows ([74318da](https://github.com/inference-gateway/n8n-agent/commit/74318dabce7a6f37b3e76ab58e3c13f619095a10))

### 🔧 Miscellaneous

* Run task genrate ([50bd682](https://github.com/inference-gateway/n8n-agent/commit/50bd68205d87d1f238d9b09843c1eb3510fdbb70))

## [0.1.9](https://github.com/inference-gateway/n8n-agent/compare/v0.1.8...v0.1.9) (2025-09-22)

### 🐛 Bug Fixes

* Bump the version during release - update ADL CLI version to 0.21.4 in generated files ([63d223e](https://github.com/inference-gateway/n8n-agent/commit/63d223eeb363627cf916a26b70a90e425f5fcdb4))

## [0.1.8](https://github.com/inference-gateway/n8n-agent/compare/v0.1.7...v0.1.8) (2025-09-22)

### 🐛 Bug Fixes

* Update skill names and parameters to use underscores instead of hyphens ([a92671b](https://github.com/inference-gateway/n8n-agent/commit/a92671b78c2ac3e08a132381fb9f7d6854175bee))

### 🔧 Miscellaneous

* **deps:** Upgrade Go version to 1.25.0 and update generated files ([0289290](https://github.com/inference-gateway/n8n-agent/commit/0289290f378508a52d57acb6235ab7962a888b19))

## [0.1.7](https://github.com/inference-gateway/n8n-agent/compare/v0.1.6...v0.1.7) (2025-09-18)

### 🔧 Miscellaneous

* Update Go version to 1.24.5 and regenerate files with ADL CLI v0.20.16 ([5236947](https://github.com/inference-gateway/n8n-agent/commit/5236947e2ffc6ef444967e847c01674950c72cf8))

### 🎨 Miscellaneous

* Update tags and required fields formatting in agent.yaml ([05ed5ac](https://github.com/inference-gateway/n8n-agent/commit/05ed5ac0bdcbb41cbd0e02ad9294b853aa675dbb))

## [0.1.6](https://github.com/inference-gateway/n8n-agent/compare/v0.1.5...v0.1.6) (2025-09-17)

### 🐛 Bug Fixes

* Update ADL CLI version to 0.20.7 and adjust generated file headers ([6b23195](https://github.com/inference-gateway/n8n-agent/commit/6b231958bb2cb1b72bd9f1235155e0930796191e))

## [0.1.5](https://github.com/inference-gateway/n8n-agent/compare/v0.1.4...v0.1.5) (2025-09-16)

### ♻️ Improvements

* Inject logger into the skills ([4920c93](https://github.com/inference-gateway/n8n-agent/commit/4920c93e6fd9c2c03f2effc8db3044bc688ab014))

## [0.1.4](https://github.com/inference-gateway/n8n-agent/compare/v0.1.3...v0.1.4) (2025-09-15)

### ♻️ Improvements

* Bump ADK version to v0.10.1 ([fbd6f5e](https://github.com/inference-gateway/n8n-agent/commit/fbd6f5e47406d369425d86f5d6044c3b29384db3))

## [0.1.3](https://github.com/inference-gateway/n8n-agent/compare/v0.1.2...v0.1.3) (2025-09-15)

### 🐛 Bug Fixes

* Add WithMaxChatCompletion to LLM client config ([672c638](https://github.com/inference-gateway/n8n-agent/commit/672c63882fb0d3f319e8f3e3db9159f373e9e68a))

## [0.1.2](https://github.com/inference-gateway/n8n-agent/compare/v0.1.1...v0.1.2) (2025-09-12)

### 🐛 Bug Fixes

* Update ADL CLI version and generated timestamps in documentation and code files ([be7f402](https://github.com/inference-gateway/n8n-agent/commit/be7f402280c3b5492c6bac68f69b966cf45d512c))
* Update generated files and documentation for ADL CLI v0.19.12 ([ec1a227](https://github.com/inference-gateway/n8n-agent/commit/ec1a227a38d4496742290f150a6a8ec4da14a7f9))

### 📚 Documentation

* Fix capitalization in project name from 'N8n' to 'N8N' ([8152de4](https://github.com/inference-gateway/n8n-agent/commit/8152de4b1d6b70895dd5ee24389c5775511ba4fb))

## [0.1.1](https://github.com/inference-gateway/n8n-agent/compare/v0.1.0...v0.1.1) (2025-09-08)

### 🐛 Bug Fixes

* Update .adl-ignore and .gitattributes for generated files; update generated timestamp in main.go ([6a86e96](https://github.com/inference-gateway/n8n-agent/commit/6a86e967f26b694d3cfdd916804b1732efbba431))

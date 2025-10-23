# AI Interview assistant

- Test automation and code optimization are not implemented yet as I need the project to be funcational ASAP to practice myself.

# How to Setup

Before running project, make sure you have 
- pnpm
- ollama with mistral(if you gonna used locally host LLM)
- correct node version
- all .env are populated
- gemini api key is required for file processing at the moment
- go to apps/api
- run `pnpm db:generate & pnpm db:migrate`

To run the project, just run
- run `pnpm dev` at root 

## Tech Spec
- Nestjs
- Nextjs
- Ollama
- Vercal AI SDK
- GraphQL

## Requirements
- ollama mistral
- nvm
- pnpm

# Features
- [ ] text
- [ ] Transcribe for text answer
- [ ] Audio interview (Conversational)
- [ ] Video interview (TBD)

# TO DO Backend
- [ ] code optimization
- [ ] unit test
- [ ] database normalization
- [ ] vector store?
- [ ] knowledge graph?

I still don't know whether to add vector store or knowledge graph since this project is suppose to be low cost to as much as possible.

# TO DO Frontend
- [ ] code optimization
- [ ] unit test
- [ ] integration test
- [ ] e2e test with playwright
- [ ] storybook

# TO DO Browser extension
- [ ] scrape, autofill and auto apply on wellfounded
- [ ] scrape, autofill and auto apply on linkedin
- [ ] scrape, autofill and auto apply on indeed
- [ ] save jobs to database
# AI Coding Agent Instructions for Uber Login Backend

## Architecture Overview

This is a Node.js Express backend application with the following tech stack:
- **Framework**: Express.js (v5.2.1) for HTTP server
- **Database**: MongoDB via Mongoose (v9.3.0) for data persistence
- **Middleware**: CORS enabled for cross-origin requests
- **Configuration**: dotenv for environment variable management

The app entry point is `backend/app.js`, which loads environment variables and initializes the Express server.

## Key Patterns & Conventions

### Module System
- Uses CommonJS module system (`"type": "commonjs"` in package.json)
- Current imports: `dotenv`, `express`, `cors`
- Note: Import statements are present (ES6 syntax) but package.json specifies CommonJS - may need standardization

### Environment Setup
- All environment-sensitive configuration uses dotenv
- Environment variables loaded at app startup via `dotenv.config()`
- No documented env variables yet - establish pattern in .env example

### Database Integration
- Mongoose available for MongoDB schema definition and queries
- No models currently visible - establish location pattern (likely `backend/models/`)

### API & Middleware Stack
- CORS middleware active (review allowed origins configuration)
- Express patterns to follow: route separation, error handling middleware, status codes

## Development Commands

- **Run tests**: `npm test` (currently placeholder - implement test suite)
- **Start server**: Add `npm start` or `npm dev` scripts
- **Dependencies**: Install with `npm install` (Node 18+ recommended for Express v5)

## File Organization Guidance

Recommended structure as project expands:
```
backend/
  ├── app.js (entry point)
  ├── models/ (Mongoose schemas)
  ├── routes/ (API endpoints)
  ├── middleware/ (custom middleware, auth, validation)
  ├── controllers/ (request handlers)
  └── config/ (database, environment setup)
```

## Next Steps for AI Agents

1. **Clarify import/module system**: Standardize between ES6 imports and CommonJS
2. **Configure CORS properly**: Document allowed origins
3. **Add MongoDB connection**: Create models directory and connection logic
4. **Implement routes**: Define API endpoints for login/auth flows
5. **Add error handling**: Express error middleware pattern
6. **Set up testing**: Establish Jest or Mocha test structure

---

*Last updated: March 13, 2026 - Based on early-stage backend scaffold*

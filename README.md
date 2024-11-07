# TechPostGen_Backend

TechPostGen_Backend is an API server that generates AI-powered tech posts for social media. The backend uses OpenAI's API to generate tech-related review post on recent news and stores posts in MongoDB. The server is built with Node.js and Express.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Tasks Checklists](#tasks-checklists)


## Overview

This backend project allows for generating AI-based tech posts, such as reviews and social media posts, using the OpenAI API.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://docs.npmjs.com/cli/v10/commands/npm-install) (v10+)


### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/TechPostGen_Backend.git
   cd TechPostGen_Backend

2. **Install dependencies**

   ```bash
    npm install

3. **Start the server**
    Use `nodemon` for development:
    ```bash
    npm run dev
    ```
    Or use `node` for production:
    ```bash
    npm start
    ```


### Configuration
   - .env file contains configuration variables for the server, MongoDB, and OpenAI API.
   - Default server port: 3001.

## Project Structure

 ```bash
    TechPostGen_Backend/
    ├── src/
    │   ├── config/
    │   │   └── db.js        # MongoDB connection
    │   ├── controllers/     # Logic for API routes
    │   │   └── contentController.js   # Content router logic
    │   ├── models/          # MongoDB models
    │   │   └── contentModel.js        # Content model and schema
    │   ├── routers/         # API Routers
    │   │   └── contentRouter.js       # Content router
    │   ├── services/        # Reusable services or utilities
    │   │   └── contentGenerator.js        # OpenAI content generation logic
    │   ├── secret.js        # Load environment variables
    │   ├── app.js           # Express setup
    │   └── server.js        # Server entry point
    ├── .env                 # Environment variables
    ├── .gitignore           # Git ignore rules
    ├── package.json         # Project metadata and dependencies
    ├── package-lock.json    # Dependency lock file
    └── README.md            # Project documentation

```

### Key Files

   - `src/config/db.js`: MongoDB connection setup.
   - `src/secret.js`: Loads environment variables (DB URL, API keys).
   - `src/app.js`: Configures Express app and routes.
   - `src/server.js`: Starts the server and connects to the database.


## Tasks Checklists

   - [x] Create a base file structure
   - [x] Write Base contentModel > contentRouter > contentController  
   - [x] Write content generation logic
   - [x] Update contentModel > contentRouter > contentController to generate content, response and save upon API call
   - [x] Create a get route to show all contents for content history.
   - [x] Create a response controller to handle success and error response
   - [x] Refactored for error handling
   - [ ] Write Base userModel > userRouter > userController to create user
   - [ ] Write authRouter for login routes, a helper function to create JWT, authController, and Auth middleware to check login/logout status.
   - [ ] Save favourites by updating the contentModel and using the controller and router.
   - [ ] Custom input by passing as a param to the contentGenerator.js

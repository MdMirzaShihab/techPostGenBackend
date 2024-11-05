# TechPostGen_Backend

TechPostGen_Backend is an API server that generates AI-powered tech posts for social media. The backend uses OpenAI's API to generate tech-related content and stores posts in MongoDB. The server is built with Node.js and Express.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

This backend project allows for generating AI-based tech posts, such as reviews and social media posts, using the OpenAI API. It's in the early stages of development and will be updated over time.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (Atlas URL or local instance)
- [OpenAI API Key](https://platform.openai.com/signup)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/TechPostGen_Backend.git
   cd TechPostGen_Backend

2. **Install dependencies**

   ```bash
    npm install

3. **Start the server**
    Use $nodemon$ for development:
    ```bash
    npm run dev

    Or use $node$ for production:
    ```bash
    npm start


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
    │   ├── models/          # MongoDB models
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

    $src/config/db.js$: MongoDB connection setup.
    $src/secret.js$: Loads environment variables (DB URL, API keys).
    $src/app.js$: Configures Express app and routes.
    $src/server.js$: Starts the server and connects to the database.

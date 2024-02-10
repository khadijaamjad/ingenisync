# IngeniSync API

## Overview

This server application is built using Node.js, Express.js, MongoDB, and Mongoose. It serves as the backend for IngeniSync, providing RESTful API endpoints for managing To-do lists and more.

## Pre-requisites

Before running the server, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1. **Clone the Repository:**
   ```
   git clone https://github.com/khadijaamjad/ingenisync.git
   cd ingenisync
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the url to your DB:
   ```
   ATLAS_URI=mongodb://localhost:27017/database-name
   ```

   Replace `database-name` with the name of your MongoDB database.

4. **Start the Server:**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5200` by default.

## API Endpoints

- **GET /api/todolists:** Get all to-do list.
- **GET /api/todolists/:id:** Get a specific to-do list by ID.
- **POST /api/todolists:** Create a new to-do list.
- **PUT /api/todolists/:id:** Update a to-do list by ID.
- **DELETE /api/todolists/:id:** Delete a to-do list by ID.

- **GET /api/stickyNotes:** Get all sticky notes.
- **GET /api/stickyNotes/:id:** Get a specific sticky note by ID.
- **POST /api/stickyNotes:** Create a new sticky note.
- **PUT /api/stickyNotes/:id:** Update a sticky note by ID.
- **DELETE /api/stickyNotes/:id:** Delete a sticky note by ID.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request. Do not add front-end related changes in the same PR as backend server. 


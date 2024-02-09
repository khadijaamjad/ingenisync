import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { connectToDatabase } from './db';
import { StickyNoteRoutes, ToDoItemRoutes, ToDoListRoutes } from './routers';

// Load environment variables from the .env file, where the ATLAS_URI is configured
dotenv.config();

const { ATLAS_URI } = process.env;

if (!ATLAS_URI) {
  console.error('No ATLAS_URI environment variable has been defined');
  process.exit(1);
}

connectToDatabase(ATLAS_URI)
  .then(() => {
    const app = express();
    app.use(bodyParser.json());
    app.use('/', StickyNoteRoutes, ToDoItemRoutes, ToDoListRoutes);
    app.use(cors());

    app.listen(5200, () => {
      console.log(
        `IngeniSync backend server running at http://localhost:5200...`
      );
    });
  })
  .catch((error) => console.error(error));

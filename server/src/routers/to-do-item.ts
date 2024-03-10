import express, { Router } from 'express';
import {
  add,
  update,
  deleteMultiple,
  getSingle,
  getAll
} from '../controllers/to-do-item';

const router: Router = express.Router();

router.get('/:id', getSingle);

router.get('/', getAll);

router.put('/:id', update);

router.delete('/:id', deleteMultiple);

export default router;

import express, { Router } from 'express';
import {
  add,
  update,
  deleteSingle,
  getSingle,
  getAll,
} from '../controllers/to-do-list';

const router: Router = express.Router();

router.post('/', add);

router.get('/:id', getSingle);

router.get('/', getAll);

router.put('/:id', update);

router.delete('/:id', deleteSingle);

export default router;

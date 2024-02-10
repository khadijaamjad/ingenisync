import express, { Router } from 'express';
import {
  add,
  login,
  update,
  deleteSingle,
  getSingle,
  getAll,
} from '../controllers/user';

const router: Router = express.Router();

router.post('/', add);

router.post('/auth', login);

router.get('/:id', getSingle);

router.get('/', getAll);

router.put('/:id', update);

router.delete('/:id', deleteSingle);

export default router;

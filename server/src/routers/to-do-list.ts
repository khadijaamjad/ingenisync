import express, { Router } from 'express';
import {
  add,
  update,
  deleteSingle,
  getSingle,
  getAll,
  getItemsDueThisWeek,
  getItemsDueToday,
  getItemsDueTomorrow
} from '../controllers/to-do-list';

const router: Router = express.Router();

router.post('/', add);

router.get('/week', getItemsDueThisWeek);

router.get('/today', getItemsDueToday);

router.get('/tomorrow', getItemsDueTomorrow);

router.get('/:id', getSingle);

router.get('/', getAll);

router.put('/:id', update);

router.delete('/:id', deleteSingle);

export default router;

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
import {
  update as updateItem,
  add as addItem,
  deleteMultiple as deleteItem
} from '../controllers/to-do-item';

const router: Router = express.Router();

router.post('/', add);

router.get('/week', getItemsDueThisWeek);

router.get('/today', getItemsDueToday);

router.get('/tomorrow', getItemsDueTomorrow);

router.get('/:id', getSingle);

router.get('/', getAll);

router.put('/:id', update);

router.delete('/:id', deleteSingle);

// Update to-do item(s)
router.put('/:listId/items/', updateItem);

// Add a new to-do item to a list
router.post('/:listId/items', addItem);

// Delete a to-do item
router.post('/:listId/items/delete', deleteItem);

export default router;

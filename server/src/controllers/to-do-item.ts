import { ToDoItem } from '../models/to-do-item';

export const add = async (req, res) => {
  const body = req.body;

  var toDoItem = new ToDoItem({
    description: body.description,
    dueDate: body.dueDate,
    completed: body.completed
  });

  try {
    await toDoItem.save();
    res.send(toDoItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const toDoItem = await ToDoItem.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.send(toDoItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteSingle = async (req, res) => {
  try {
    const toDoItem = await ToDoItem.findByIdAndDelete(req.params.id);
    res.send(toDoItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getSingle = async (req, res) => {
  try {
    const toDoItem = await ToDoItem.findById(req.params.id);
    res.send(toDoItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const toDoItems = await ToDoItem.find({});
    res.send(toDoItems);
  } catch (error) {
    res.status(500).send(error);
  }
};

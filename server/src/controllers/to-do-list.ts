import { ToDoList } from '../models/to-do-list';

export const add = async (req, res) => {
  const body = req.body;

  var toDoList = new ToDoList({
    title: body.title,
    toDoItems: body.toDoItems
  });

  try {
    await toDoList.save();
    res.send(toDoList);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const toDoList = await ToDoList.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.send(toDoList);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteSingle = async (req, res) => {
  try {
    const toDoList = await ToDoList.findByIdAndDelete(req.params.id);
    res.send(toDoList);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getSingle = async (req, res) => {
  try {
    const toDoList = await ToDoList.findById(req.params.id);
    res.send(toDoList);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const toDoLists = await ToDoList.find({});
    res.send(toDoLists);
  } catch (error) {
    res.status(500).send(error);
  }
};

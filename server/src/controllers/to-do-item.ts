import { ToDoList } from '../models/to-do-list';
import { ToDoItem } from '../models/to-do-item';

export const add = async (req, res) => {
  try {
    const { listId } = req.params;
    const body = req.body;

    // Find the to-do list by ID
    const toDoList = await ToDoList.findById(listId);

    const newItems = body.toDoItems?.filter((item) => !item.id);

    newItems.forEach((item) => {
      var toDoItem = new ToDoItem({
        description: item.description,
        dueDate: item.dueDate,
        completed: item.completed
      });

      // Add the new to-do item to the list
      toDoList.toDoItems.push(toDoItem);
    });

    // Save the updated to-do list
    const updatedList = await toDoList.save();

    res.status(200).send(updatedList);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const { listId } = req.params;
    const updatedItemsData = req.body.toDoItems;

    // Find the to-do list by ID
    const toDoList = await ToDoList.findById(listId);

    // Check if the to-do list exists
    if (!toDoList) {
      return res.status(404).send({ message: 'To-do list not found' });
    }

    // Update each to-do item with the new data
    updatedItemsData.forEach((updatedItem: ToDoItem) => {
      // Find the index of the to-do item within the to-do list
      const itemIndex = toDoList.toDoItems.findIndex(
        (item) => item._id.toString() === updatedItem._id
      );

      // Check if the to-do item exists in the to-do list
      if (itemIndex !== -1) {
        // Update the to-do item with the new data
        toDoList.toDoItems[itemIndex].set(updatedItem);
      }
    });

    // Save the to-do list with the updated items
    await toDoList.save();

    // Send the updated to-do list in the response
    res.send(toDoList);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteMultiple = async (req, res) => {
  try {
    const { listId } = req.params;
    const updatedItemsData = req.body.toDoItems;

    // Find the to-do list by ID
    const toDoList = await ToDoList.findById(listId);

    // Check if the to-do list exists
    if (!toDoList) {
      return res.status(404).send({ message: 'To-do list not found' });
    }

    const itemsToDelete = [];

    for (const currentObj of toDoList.toDoItems) {
      // Check if the current to-do item exists in the updated to-do list
      const foundItemId = updatedItemsData.find(
        (item) => item._id.toString() === currentObj._id.toString()
      )?._id;

      if (!foundItemId) {
        itemsToDelete.push(currentObj._id);
      }
    }

    if (itemsToDelete.length) {
      await ToDoList.updateOne(
        { _id: listId },
        {
          $pull: {
            toDoItems: { _id: { $in: itemsToDelete } }
          }
        }
      );
    }

    res.send();
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

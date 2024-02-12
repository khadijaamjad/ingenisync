import { TaskTimelineEnum } from '../models/internal';
import { ToDoList } from '../models/to-do-list';

const HOURS_TO_MS = 24 * 60 * 60 * 1000;

export const add = async (req, res) => {
  const body = req.body;

  var toDoList = new ToDoList({
    title: body.title,
    toDoItems: body.toDoItems,
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

export const getItemsDueThisWeek = async (req, res) => {
  try {
    const result = await getAggregatedResult(TaskTimelineEnum.ThisWeek);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getItemsDueToday = async (req, res) => {
  try {
    const result = await getAggregatedResult(TaskTimelineEnum.Today);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getItemsDueTomorrow = async (req, res) => {
  try {
    const result = await getAggregatedResult(TaskTimelineEnum.Tomorrow);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAggregatedResult = async (taskTimeline: TaskTimelineEnum) => {
  let aggregateCondition = {};
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const tomorrowStart = new Date(today.getTime() + HOURS_TO_MS);
  const nextDayStart = new Date(tomorrowStart.getTime() + HOURS_TO_MS);
  const weekEnd = new Date(new Date().getTime() + 7 * HOURS_TO_MS);

  switch (taskTimeline) {
    case TaskTimelineEnum.Today:
      aggregateCondition = {
        'toDoItems.dueDate': { $gte: today, $lt: tomorrowStart }
      };
      break;
    case TaskTimelineEnum.Tomorrow:
      aggregateCondition = {
        'toDoItems.dueDate': { $gte: tomorrowStart, $lt: nextDayStart }
      };
      break;
    case TaskTimelineEnum.ThisWeek:
      aggregateCondition = {
        $and: [
          { 'toDoItems.dueDate': { $gte: today } },
          { 'toDoItems.dueDate': { $lt: weekEnd } }
        ]
      };
      break;
  }

  const tasksDue = await ToDoList.aggregate([
    {
      // Match lists and items based on need
      $match: aggregateCondition
    },
    {
      // Unwind the "toDoItems" array to process each item independently
      $unwind: '$toDoItems'
    },
    {
      // Project the required fields
      $project: {
        title: '$title',
        description: '$toDoItems.description',
        dueDate: '$toDoItems.dueDate'
      }
    },
    {
      // Sort the results by due date for convenience
      $sort: { dueDate: 1 } // Ascending order
    }
  ]);

  console.log(JSON.stringify(aggregateCondition));
  return tasksDue;
};

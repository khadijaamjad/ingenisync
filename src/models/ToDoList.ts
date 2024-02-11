import { ToDoItem } from "./ToDoItem";

export interface ToDoList {
  _id: string;
  title: string;
  toDoItems: ToDoItem[];
}

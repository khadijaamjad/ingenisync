import mongoose, { Document, Schema } from 'mongoose';
import { ToDoItem, toDoItemSchema } from './to-do-item';

interface ToDoList extends Document {
  title: string;
  toDoItems: ToDoItem[];
}

const toDoListSchema: Schema<ToDoList> = new Schema({
  title: { type: String, required: true, max: 100 },
  toDoItems: [toDoItemSchema]
});

export const ToDoList = mongoose.model('ToDoList', toDoListSchema);

import mongoose, { Document, Schema } from 'mongoose';

export interface ToDoItem extends Document {
  description: string;
  dueDate: Date;
  completed?: boolean;
}

const toDoItemSchema: Schema<ToDoItem> = new Schema({
  description: { type: String, required: true, max: 200 },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, required: false, default: false },
});

export const ToDoItem = mongoose.model('ToDoItem', toDoItemSchema);

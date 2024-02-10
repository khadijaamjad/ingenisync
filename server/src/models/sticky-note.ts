import mongoose, { Document, Schema } from 'mongoose';

interface StickyNote extends Document {
  title: string;
  noteText: string;
}

const stickyNoteSchema: Schema<StickyNote> = new Schema({
  title: { type: String, required: true, max: 100 },
  noteText: { type: String, required: true, max: 500 },
});

export const StickyNote = mongoose.model('StickyNote', stickyNoteSchema);

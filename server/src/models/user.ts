import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema: Schema<User> = new Schema({
  name: { type: String, required: true, max: 50 },
  email: { type: String, required: true, max: 30 },
  password: { type: String, required: true, max: 10 }
});

export const User = mongoose.model('User', userSchema);

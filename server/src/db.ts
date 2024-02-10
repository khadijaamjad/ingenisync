import mongoose from 'mongoose';

export async function connectToDatabase(uri: string) {
  try {
    mongoose.connect(uri);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'DB connection error:'));

    db.once('open', function () {
      console.log('DB connected successfully');
    });
  } catch (err) {
    console.log(err);
  }
}

import mongoose from 'mongoose';

let connectionPromise;

export async function connectDatabase() {
  if (databaseReady()) return true;
  if (!process.env.MONGODB_URI) return false;
  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
        maxPoolSize: 5,
      })
      .finally(() => {
        connectionPromise = undefined;
      });
  }
  await connectionPromise;
  return true;
}

export function databaseReady() {
  return mongoose.connection.readyState === 1;
}

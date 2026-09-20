import mongoose from 'mongoose';

export async function connectDatabase() {
  if (!process.env.MONGODB_URI) return false;
  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  });
  return true;
}

export function databaseReady() {
  return mongoose.connection.readyState === 1;
}

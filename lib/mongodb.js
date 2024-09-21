import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;

async function connectToDatabase() {
  if (client) return client;

  const client = await MongoClient.connect(uri, options);
  return client;
}

export async function getCollection(collectionName) {
  const client = await connectToDatabase();
  const db = client.db('mydatabase');
  return db.collection(collectionName);
}

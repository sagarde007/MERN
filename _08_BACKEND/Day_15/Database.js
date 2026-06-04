// const url =
// "mongodb+srv://createxpro6:Sagar123@@codingbysagar.eigb6yq.mongodb.net/";

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
  "mongodb+srv://createxpro6:Sagar123%40@codingbysagar.eigb6yq.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "CoderArmy";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  // the following code examples can be pasted here...

//   const findResult = await collection.find({}).toArray();
//   console.log("Found documents =>", findResult);

// insert a single document
// const insertResult = await collection.insertOne({ name: "John Doe", age: 30, });
// console.log("Inserted document =>", insertResult);


// insert multiple documents
const insertResult = await collection.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
]);
console.log("Inserted documents =>", insertResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
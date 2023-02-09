import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://suneelkumar:aaaaaa@cluster0.mongodb.net/database_name?retryWrites=true&w=majority"
    );

    const db = client.db();
    const collection = db.collection("<collection_name>");
    const result = await collection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Record inserted successfully" });
  }
};

export default handler;

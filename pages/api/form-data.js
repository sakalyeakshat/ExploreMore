import connectToDatabase from "../../lib/mongoose";
import FormData from "@/models/FormData";

console.log("MONGODB_URI:", process.env.MONGODB_URI);

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case "POST":
      try {
        const data = req.body;

        const newData = new FormData(data);
        await newData.save();
        res.status(201).json(newData);
      } catch (error) {
        res.status(500).json({ error: "Server error" });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

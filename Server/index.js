import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3600;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  console.log("Server up and running at http://localhost:3600");
});

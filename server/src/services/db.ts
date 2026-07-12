import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error("Mongo url is not defined");
    }

    await mongoose.connect(mongoUrl);
  } catch (error) {
    console.log("DB connection failed");
  }
}

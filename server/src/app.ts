import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./services/db.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { Error } from "mongoose";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser()); // read the cookies
// connect database
connectDB();

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

app.use((err: Error, req: Request, res: Response, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;

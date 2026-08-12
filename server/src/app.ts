import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./services/db.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { Error } from "mongoose";
import errorHandler from "./errors/errorHandler.js";
dotenv.config();

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser()); // read the cookies
// connect database
connectDB();

app.use("/app/v1/auth", authRoute);
app.use("/app/v1/users", userRoute);

app.use(errorHandler);

export default app;

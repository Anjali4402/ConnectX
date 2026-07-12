import express from "express";
import cors from "cors";
import connectDB from "./services/db.js";
import authRoute from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());
// connect database
connectDB();

app.use("/api/v1/auth", authRoute);

export default app;

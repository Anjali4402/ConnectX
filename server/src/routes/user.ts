import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { profileController } from "../controllers/user.controller.js";

const route = express.Router();

route.get("/me", authMiddleware, profileController);

export default route;

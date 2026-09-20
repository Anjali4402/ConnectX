import { getMyChats, newGroupChat } from "../controllers/chat.controller.js";
// import { } from "express";
import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const route = express.Router();

route.use(authMiddleware);

route.post("/group", newGroupChat);

export default route;

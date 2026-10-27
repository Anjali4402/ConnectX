import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  profileController,
  // updateProfileController,
} from "../controllers/user.controller.js";

const route = express.Router();

route.use(authMiddleware); // user authMiddleware with all route
route.get("/me", profileController);
// route.post("/update-profile", authMiddleware, updateProfileController);

// Here need to one api for search user

export default route;

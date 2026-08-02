import expres from "express";
import {
  loginController,
  registerController,
  logoutController,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const route = expres.Router();

route.post("/login", loginController);
route.post("/register", registerController);
route.post("/logout", authMiddleware, logoutController);

export default route;

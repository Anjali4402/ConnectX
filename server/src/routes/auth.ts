import expres from "express";
import {
  loginController,
  registerController,
} from "../controllers/auth.controller.js";

const route = expres.Router();

route.post("/login", loginController);
route.post("/register", registerController);

export default route;

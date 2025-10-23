import express from "express";
import {
  userSignUp,
  userLogin,
  logoutUser,
  changePassword,
} from "../Controllers/auth.controller.js";
import { auth } from "../Middlewares/auth.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", userSignUp);
AuthRouter.post("/login", userLogin);
AuthRouter.post("/logout",auth, logoutUser);
AuthRouter.post("/change-password",auth, changePassword);

export { AuthRouter };

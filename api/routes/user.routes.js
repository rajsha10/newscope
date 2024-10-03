import express from "express";
import isAdmin from "../middlewares/isAdmin.js";
import { applyForAuthor, createUser, getAllUsers } from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.post("/", isAdmin, createUser).get("/", isAdmin, getAllUsers);
userRouter.post("/apply", applyForAuthor)

export default userRouter;


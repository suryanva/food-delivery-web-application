import express from "express";
import { createCurrentUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.route("/create-user").post(createCurrentUser);

export default userRouter;

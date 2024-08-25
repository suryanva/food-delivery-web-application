import express from "express";
import { createCurrentUser } from "../controllers/user.controller";
import { jwtCheck } from "../middleware/auth.middleware";

const userRouter = express.Router();

userRouter.route("/create-user").post(jwtCheck, createCurrentUser);

export default userRouter;

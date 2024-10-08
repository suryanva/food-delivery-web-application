import express from "express";
import {
  createCurrentUser,
  updateCurrentUser,
  retrieveCurrentUser,
} from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware";
import { validateMyUserRequest } from "../middleware/validation.middleware";

const userRouter = express.Router();

userRouter.route("/create-user").post(jwtCheck, createCurrentUser);
userRouter
  .route("/update-user")
  .put(jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);
userRouter.route("/retrieve-user").get(jwtCheck, jwtParse, retrieveCurrentUser);
export default userRouter;

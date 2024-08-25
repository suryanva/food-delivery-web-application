import { Request, Response } from "express";
import User from "../models/user.model";

export const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id, email } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      return res.status(200).json({ message: "User already exists" });
    }

    // Create new user

    const newUser = new User({ auth0Id, email });
    await newUser.save();

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Creating New User" });
  }
};

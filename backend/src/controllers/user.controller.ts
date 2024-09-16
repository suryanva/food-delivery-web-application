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

export const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, city, country } = req.body;

    // Check if user exists
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;

    // Update user
    await user.save();
    res.status(200).json({ message: "User Updated Successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Updating User" });
  }
};

export const retrieveCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Retrieving User" });
  }
};

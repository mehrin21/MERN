import User from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../util/errorHandler.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  //HASHING PASSWORD
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error)
  }
};

import User from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../util/errorHandler.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //HASHING PASSWORD
  const salt = bcryptjs.genSaltSync(10);
  const hashPassword = bcryptjs.hashSync(password, salt);
  const newUser = new User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(404, "Wrong Credentails!"));

    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    const {password:pass,...rest} = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

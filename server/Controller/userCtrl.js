import { errorHandler } from "../util/errorHandler.js";
import bcryptjs from "bcryptjs";
import User from "../model/UserModel.js";
import Listing from "../model/ListingModel.js";

export const updateUser = async (req, res, next) => {
  // console.log("rea",req)
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account"));

  try {
    if (req.body.password) {
      const salt = bcryptjs.genSaltSync(10);
      req.body.password = bcryptjs.hashSync(req.body.password, salt);
    }

    const update = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = update._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account"));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};
export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been Logged Out");
  } catch (error) {
    next(error);
  }
};

export const getUserListing = async (req, res, next) => {
  console.log(req.user)
  console.log(req.params)
  if (req.user.id === req.params.id) {
    try {
      const listing = await Listing.find({ userRef: req.params.id });
      console.log("listing",listing)
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can only view your own listings!"));
  }
};

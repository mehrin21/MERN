import { errorHandler } from "../util/errorHandler.js";
import bcryptjs from "bcryptjs";
import User from "../model/UserModel.js";

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

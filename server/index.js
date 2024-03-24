import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/UserRoutes.js";

dotenv.config();

// MONGODB CONNECT
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use('/api/user',userRouter)

app.listen(9001, () => {
  console.log("server is listeneing");
});



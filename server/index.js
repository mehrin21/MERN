import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(9001, () => {
  console.log("server is listeneing");
});

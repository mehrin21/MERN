import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/UserRoutes.js";
import authRouter from './Routes/authRoutes.js'
import cookieParser from 'cookie-parser'

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

app.use(express.json())

app.use(cookieParser())

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.use((err,req,res,next)=>{
  const statusCode = err.statuscode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})

app.listen(9001, () => {
  console.log("server is listeneing");
});



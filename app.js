import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import dotenv from "dotenv";



dotenv.config();

mongoose.connect(process.env.MONGODB_URI).
then(() => {
  console.log("Connected to mongodb");
})
.catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});


const app = express();

app.use(express.json());


app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

const port = process.env.PORT || 5000;



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
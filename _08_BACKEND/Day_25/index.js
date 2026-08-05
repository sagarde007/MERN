const express =  require("express");
const app = express();
const main = require("./Database");
const User = require("./Models/usere");
const validateUser = require("./utils/validateUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userAuth = require("./middleware/userAuth");
require("dotenv").config();
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const commentRouter = require("./routes/comment");
const redisClient = require("./config/redis");
const rateLimiter = require("./middleware/ratelimiter");

app.use(express.json());
app.use(cookieParser());

app.use(rateLimiter);

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);


const InitializeConnection = async ()=>{
  try{

    // await redisClient.connect();
    // console.log("Connected to Redis");

    // await main();
    // console.log("Connected to MongoDB");

    await Promise.all([redisClient.connect(), main()]);
    console.log("Connected to Redis and MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`i am listening at port ${process.env.PORT}`);
    });
  }
  catch(err){
    console.log("Error: "+ err);
  }
}

InitializeConnection();



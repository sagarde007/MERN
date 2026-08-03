const express = require("express");
const authRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../Models/usere");
const validateUser = require("../utils/validateUser");
const redisClient = require("../config/redis");
const jwt = require("jsonwebtoken");
const userAuth = require("../middleware/userAuth");

authRouter.post("/register", async (req, res) => {
  try {
    validateUser(req);

    // converting password to hash code
    req.body.password = await bcrypt.hash(req.body.password, 10);

    await User.create(req.body);
    res.send("User registered successfully");
  } catch (err) {
    res.send("Error" + err.message);
  }
});

// login functionality:-
authRouter.post("/login", async (req, res) => {
  try {
    const people = await User.findOne({ emailid: req.body.emailid });

    // if(!(req.body.emailid === people.emailid)){
    //     throw new Error("Invalid email id or password");
    // }

    const IsAllowed = people.verifyPassword(req.body.password);
    if (!IsAllowed) {
      throw new Error("Invalid email id or password");
    }

    // jwt token:-
    const token = people.getJwt();
    res.cookie("token", token);
    res.send("Login successful");
  } catch (err) {
    res.send("Error" + err.message);
  }
});

// logout functionality:-

authRouter.post("/logout", userAuth, async(req,res)=>{
  try{
    const {token} = req.cookies;
    // console.log(token);

    const payload = jwt.decode(token);
    // console.log(payload);

    await redisClient.set(`token:${token}`, "Bloked");

    // await redisClient.expire(`token:${token}`, 1800); // 30 minutes in seconds

    await redisClient.expireAt(`token:${token}`, payload.exp); // Set expiration time to match the token's expiration


    res.cookie("token",null,{expires:new Date(Date.now())});
    res.send("Logout successful");
  }
  catch(err){
    res.send("Error" + err.message);
  }
})

module.exports = authRouter;
const jwt = require("jsonwebtoken");
const User = require("../Models/usere");
const redisClient = require("../config/redis");


const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Token does not exist");
    }

    const payload = jwt.verify(req.cookies.token, process.env.SECRECT_KEY);

    const { _id } = payload;
    if (!_id) {
      throw new Error("ID is missing in token");
    }

    const result = await User.findById(_id);

    if (!result) {
      throw new Error("User not found");
    }

    const IsBlocked = await redisClient.exists(`token:${token}`);

    if(IsBlocked){
      throw new Error("Token is blocked");
    }

    req.result = result;

    next();
  } catch (err) {
    res.send("Error" + err.message);
  }
};


module.exports = userAuth;
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");


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
    req.result = result;

    next();
  } catch (err) {
    res.send("Error" + err.message);
  }
};


module.exports = userAuth;
const auth = (req, res, next) => {
  // authentication and authorization
  // for admin only
  // dummy code for authentication

  const token = "ABCDE";
  const Access = token === "ABCDE" ? 1 : 0;

  if (!Access) {
    res.status(403).send("You are not authorized to access this route");
  }
  next();
};

module.exports = { Auth: auth };
const express = require("express");
const commentRouter = express.Router();

commentRouter.get("/", (req,res)=>{
    res.send("Comment send successfully");
})

commentRouter.patch("/", (req, res) => {
  res.send("Comment updated successfully");
});

commentRouter.delete("/", (req, res) => {
  res.send("Comment deleted successfully");
});

module.exports = commentRouter;
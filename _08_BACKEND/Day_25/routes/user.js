const express = require("express");
const userRouter = express.Router();

const userAuth = require("../middleware/userAuth");
const User = require("../Models/usere");



userRouter.get("/",userAuth,async (req,res)=>{
    try{
        res.send(req.result);
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})

userRouter.delete("/:id", userAuth, async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("User deleted successfully");
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})

userRouter.patch("/", userAuth, async(req,res)=>{
    try{
        const { _id, ...update } = req.body;
        await User.findByIdAndUpdate(_id, update,{runValidators:true});
        res.send("User updated successfully");
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})

module.exports = userRouter;
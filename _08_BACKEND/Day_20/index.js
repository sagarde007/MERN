const express =  require("express");
const app = express();
const main = require("./Database");
const User = require("./Models/usere");
const validateUser = require("./utils/validateUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());


app.post("/register",async (req,res)=>{
    try{
        validateUser(req);

        // converting password to hash code
        req.body.password = await bcrypt.hash(req.body.password, 10);

        await User.create(req.body);
        res.send("User registered successfully");
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})


// login functionality:-
app.post("/login", async(req,res)=>{
    try{
        const people = await User.findOne({ emailid: req.body.emailid });

        // if(!(req.body.emailid === people.emailid)){
        //     throw new Error("Invalid email id or password");
        // }
        const IsAllowed = await bcrypt.compare(req.body.password,people.password);
        if(!IsAllowed){
            throw new Error("Invalid email id or password");
        }

        // jwt token:-
        const token = jwt.sign({_id:people._id,emailid:people.emailid},"sagar@123",{expiresIn:"10d"});
        res.cookie("token",token);
        res.send("Login successful");
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})
// -----------------------****-------------------------

app.get("/info",async (req,res)=>{
    try{
        // validate the user first:-
        const payload = jwt.verify(req.cookies.token,"sagar@123");
        console.log(payload);
        const result = await User.find();
        
        res.send(result);
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})


app.get("/user",async (req,res)=>{
    try{
        const payload = jwt.verify(req.cookies.token, "sagar@123");
        console.log(payload);
        const result = await User.findById(payload._id);
        res.send(result);
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})

app.delete("/user/:id", async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("User deleted successfully");
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})

app.patch("/user", async(req,res)=>{
    try{
        const { _id, ...update } = req.body;
        await User.findByIdAndUpdate(_id, update,{runValidators:true});
        res.send("User updated successfully");
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})



main()
  .then(() =>{
    console.log("Connected to MongoDB")
    app.listen(6000, () => {
      console.log("i am listening at port 6000");
    });
  })
  .catch((err) => console.log(err));



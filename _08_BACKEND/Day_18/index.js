const express =  require("express");
const app = express();
const main = require("./Database");
const User = require("./Models/usere");

app.use(express.json());

app.post("/register",async (req,res)=>{
    try{

        const mandetoryFields = ["firstname","age","emailid"];
        const IsAllowed = Object.keys(req.body).every((keys)=> mandetoryFields.includes(keys));

        if(!IsAllowed){
            throw new Error("Invalid fields in request body");
        }
        await User.create(req.body);
        res.send("User registered successfully");
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})

app.get("/info",async (req,res)=>{
    try{
        const result = await User.find();
        res.send(result);
    }
    catch(err){
        res.send("Error"+ err.message);
    }
})

app.get("/user/:id",async (req,res)=>{
    try{
        const result = await User.findById(req.params.id);
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



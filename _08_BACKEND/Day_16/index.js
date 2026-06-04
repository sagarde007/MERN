const express =  require("express");
const app = express();
const main = require("./Database");
const User = require("./Models/usere");

app.use(express.json());

app.get("/info",async(req, res)=>{
    const ans = await User.find({});
    res.send(ans);
})

app.post("/info",async(req, res)=>{
    
    // const ans = new User(req.body);
    // await ans.save();
    try{
        await User.create(req.body);
        res.send("data added successfully");

    }
    catch(err){
        res.send(err);
    }
    
})

app.delete("/info",async(req,res)=>{
    await User.deleteOne({name:"Raju"});
    res.send("data deleted successfully");
})

app.put("/info",async(req,res)=>{
    const result = await User.updateOne({name:"Rohan"},{age:38, city:"kochi"});
    res.send("data updated successfully");

})
main()
  .then(() =>{
    console.log("Connected to MongoDB")
    app.listen(6000, () => {
      console.log("i am listening at port 6000");
    });
  })
  .catch((err) => console.log(err));



const mongoose = require("mongoose");


async function main(){
  await mongoose.connect(
    "mongodb+srv://createxpro6:Sagar123%40@codingbysagar.eigb6yq.mongodb.net/Bookstore"
  );

    // code here :-
    // const userSchema = new mongoose.Schema({
    //   name:String,
    //   age:Number,
    //   city:String,
    //   gender:String
    // });

    // model create : collection create 

    // const User =  mongoose.model("user",userSchema) // user is collection name and userSchema is schema name

    // create document or object create
    // const user1 = new User({name:"Sagar",age:20,city:"kolkata",gender:"male"});
    // await user1.save();


    // await User.create({name:"mohan",age:34,city:"kharagpur"});

    // await User.insertMany([
    //   {name:"Rohan",age:25,city:"delhi"},
    //   {name:"Rohit",age:30,gender:"male"},
    // ])

    // read data from database 
    // const ans = await User.find({});
    // console.log(ans);

    // find document by particular field
    // const result = await User.find({name:"Sagar"});
    // console.log(result);


}

module.exports = main;
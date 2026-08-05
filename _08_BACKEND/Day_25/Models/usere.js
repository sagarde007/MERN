const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
      firstname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30,
      },
      lastname:{
        type:String
      },
      age:{
        type:Number,
        required:true,
        min:18,  
        max:70,
      },
      gender:{
        type:String,
        enum: ["male","female","other"]

        // validate(value){
        //   if(!["male","female","other"].includes(value))
        //     throw new Error("invalid Gender");

        // }
      },
      emailid:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true,
      },
      password:{
        type:String,
        required:true,
      },
      photo:{
        type:String,
        default:"This is default photo"

      }
    },{timestamps:true});


userSchema.methods.getJwt = function(){
    const ans =  jwt.sign({_id:this._id,emailid:this.emailid},process.env.SECRECT_KEY,{expiresIn:"10d"});
    return ans;
  
}

userSchema.methods.verifyPassword = async function(Userpassword){
  const ans = await bcrypt.compare(Userpassword,this.password);
  return ans;
}


const User =  mongoose.model("user",userSchema)

module.exports = User;
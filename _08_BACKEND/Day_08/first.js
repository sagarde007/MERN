const express =  require("express");

const app = express();

// route hendeler 

// app.use(
//   "/user",[
//   (req, res, next) => {
//     console.log("First");

//     // res.send("hello user");
//     // console.log("First End");

//     // gives error because we are sending response twice
//     // res.send("hello ji");
//     next();
//   },
//   (req, res, next) => {
//     console.log("second");
//     // res.send("hello user i am second");
//     next();
//   },
//   (req, res) => {
//     console.log("Third");
//     res.send("hello user i am third");
    

//   },
// ]
// );

// maintain log of all request through middleware
app.use("/user" , (req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    next();
})

app.get("/user",(req,res)=>{
    
    res.send("Info about user");
})

app.post("/user", (req, res) => {
  res.send("Info saved about user");
});

app.delete("/user", (req, res) => {
  res.send("Info deleted about user");
});

app.listen(5000, () => {
  console.log("i am listening at port 5000");
});

const express =  require("express");

const app = express();

app.use("/about",(req , res)=>{
    res.send({"name":"sagar", "age":22});
})

app.use("/contact", (req, res) => {
  res.send("i am your contact page");
});

app.use("/detail", (req, res) => {
  res.send("i am your detail page");
});

app.use("/", (req, res) => {
  res.send("i am your home page");
});

app.listen(4000 , ()=>{
    console.log("i am listening at port 4000");
})
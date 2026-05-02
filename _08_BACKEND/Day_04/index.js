const http = require('http');

const server = http.createServer((req , res)=>{
    // res.end("Hello coder army i am sagar de");

    if (req.url === "/") {
      res.end("Hello coder army");
    } 
    else if (req.url === "/contact") {
      res.end("Hello i am contact page");
    } 
    else if (req.url === "/about") {
      res.end("Hello i am about page");
    }
    else{
        res.end("Error: page not found");
    }


});

server.listen(4000 , ()=>{
    console.log("i am listening at port number 4000");
})
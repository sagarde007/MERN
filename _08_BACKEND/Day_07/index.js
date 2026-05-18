const express =  require("express");

const app = express();

const Bookstore = [
    {id:1, name:"The Great Gatsby", author:"F. Scott Fitzgerald", price:10.99},
    {id:2, name:"To Kill a Mockingbird", author:"Harper Lee", price:8.99},
    {id:3, name:"1984", author:"George Orwell", price:9.99}
]

app.use(express.json()); // middleware to parse the data from the body of the request

app.get("/book", (req,res)=>{
    res.send(Bookstore);
})

app.get("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const book = Bookstore.find(info=> info.id === id);
    res.send(book);
})

app.post("/book", (req,res)=>{
    Bookstore.push(req.body);
    res.send("Data added successfully");
})



app.listen(5000, () => {
  console.log("i am listening at port 5000");
});


//  route match in app.use() method is used to match the route and execute the callback function when the route is matched. It is used to define the middleware function which is executed before the actual request handler is executed.




// app.use("/user", (req , res)=>{
//     res.send("Hello coder army");
// });

// parsing the data from the body of the request
// app.use(express.json());
// middleware : a function which is executed before the actual request handler is executed

// app.get("/user", (req, res) => {
//   res.send({name:"sagar" , age:22});
// });

// app.post("/user", (req,res)=>{
//     console.log("Data saved successfully");

//     console.log(req.body);
//     res.send("Data saved successfully");
// })

// app.listen(4000 , ()=>{
//     console.log("i am listening at port 4000");
// });
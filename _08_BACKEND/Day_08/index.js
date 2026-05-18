const express =  require("express");

const app = express();



const Bookstore = [
  {
    id: 1,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
  },
  { id: 2, name: "To Kill a Mockingbird", author: "Harper Lee", price: 8.99 },
  { id: 3, name: "1984", author: "George Orwell", price: 9.99 },
];

app.use(express.json());

app.get("/book", (req, res) => {
  res.send(Bookstore);
});

app.get("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = Bookstore.find((info) => info.id === id);
  res.send(book);
});

app.post("/book", (req, res) => {
  Bookstore.push(req.body);
  res.send("Data added successfully");
});

app.patch("/book", (req, res) => {
  console.log(req.body);
  const book = Bookstore.find((info) => info.id === req.body.id);

  if (req.body.author) book.author = req.body.author;

  if (req.body.name) book.name = req.body.name;

  res.send("Data updated successfully");
});

app.put("/book", (req, res) => {
  console.log(req.body);

  const book = Bookstore.find((info) => info.id === req.body.id);

  book.author = req.body.author;
  book.name = req.body.name;
  book.price = req.body.price;

  res.send("changes made successfully");
});

app.delete("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = Bookstore.findIndex((info) => info.id === id);
  Bookstore.splice(index, 1);

  res.send("Data deleted successfully");
});

app.listen(3000, () => {
  console.log("i am listening at port 3000");
});

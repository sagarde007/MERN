const express =  require("express");

const app = express();

const {Auth} = require("./middleware/auth");

// CURD - Create, Read, Update, Delete

// Database : Array of objects

app.use(express.json());

const FoodMenu = [
  { id: 1, food: "Pizza", category: "non-veg", price: 200 },
  { id: 2, food: "Burger", category: "non-veg", price: 100 },
  { id: 3, food: "Pasta", category: "veg", price: 150 },
  { id: 4, food: "Fries", category: "veg", price: 50 },
  { id: 5, food: "Coke", category: "non-veg", price: 30 },
  { id: 6, food: "Pepsi", category: "non-veg", price: 30 },
  { id: 7, food: "Lemonade", category: "veg", price: 20 },
  { id: 8, food: "Ice Cream", category: "veg", price: 80 },
  { id: 9, food: "Chicken Wings", category: "non-veg", price: 200 },
  { id: 10, food: "Mutton", category: "non-veg", price: 100 },
  { id: 11, food: "Sandwich", category: "veg", price: 150 },
  { id: 12, food: "Cheeseburger", category: "veg", price: 50 },
  { id: 13, food: "Water", category: "non-veg", price: 30 },
  { id: 14, food: "Juice", category: "non-veg", price: 30 },
  { id: 15, food: "salad", category: "veg", price: 20 },
  { id: 16, food: "egg curry", category: "non-veg", price: 80 },
  
];


// user add to cart items put into this array
const AddtoCart = [];

app.get("/food" , (req,res)=>{
    res.status(200).send(FoodMenu); 
})

app.use("/admin" , Auth);


app.post("/admin",(req,res)=>{

        FoodMenu.push(req.body);
        res.status(201).send("Food item added successfully");
})

app.delete("/admin/:id" , (req,res)=>{

        const id = parseInt(req.params.id);
        const index = FoodMenu.findIndex((info) => info.id === id);

        if(index === -1){
            res.send("Food item not found");
        }
        else{
            FoodMenu.splice(index, 1);
            res.status(200).send("Food item deleted successfully");
        }
})

app.patch("/admin" , (req,res)=>{

        const id = req.body.id;

        const fooddata = FoodMenu.find((info) => info.id === id);

        if(fooddata){
            if(req.body.food){
                fooddata.food = req.body.food;
            }
            if(req.body.category){
                fooddata.category = req.body.category;
            }
            if(req.body.price){
                fooddata.price = req.body.price;
            }

            res.status(200).send("Food item updated successfully");
        }
        else{
            res.send("Food item not found");
        }

})

app.listen(6000, () => {
  console.log("i am listening at port 6000");
});

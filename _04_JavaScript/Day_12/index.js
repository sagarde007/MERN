// forEach , filter , reducer , map, set

// const arr = [20,30,45,67,87];

// arr.forEach((Number,index,arr)=>{
//     console.log(Number,index,arr);
// })

// let sum =0;
// arr.forEach((Number) => {
//   sum+=Number
// });
// console.log(sum);


// <---- filter ---->

// const arr = [20, 30, 45, 67, 87];
// const newarr = arr.filter((number)=>number>25);
// // true --> selected , false --> not selected
// console.log(newarr);


// Own function for filtering array element besed of given condition

// const arr = [20, 30, 45, 67, 87];
// Array.prototype.filtering = function(compare){
//     const ans =[];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }

// const newarr = arr.filtering((num)=>num>24);
// console.log(newarr);

// mapping-->

// const arr = [20, 30, 45, 67, 87];
// const newarr = arr.map((number)=> number+2);
// console.log(newarr);


// real world example :--

    const products = [
        // Electronics
            {
                id: 1,
                name: "Laptop",
                category: "Electronics",
                price: 1200,
                inStock: true,
            },
            {
                id: 2,
                name: "Headphones",
                category: "Electronics",
                price: 200,
                inStock: true,
            },
            {
                id: 3,
                name: "Smartphone",
                category: "Electronics",
                price: 800,
                inStock: false,
            },
            {
                id: 4,
                name: "Monitor",
                category: "Electronics",
                price: 300,
                inStock: true,
            },
            {
                id: 5,
                name: "Keyboard",
                category: "Electronics",
                price: 75,
                inStock: true,
            },

        // Books
            { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
            {
                id: 7,
                name: "A Brief History of Time",
                category: "Books",
                price: 30,
                inStock: true,
            },
            { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

        // Appliances
            {
                id: 9,
                name: "Coffee Maker",
                category: "Appliances",
                price: 150,
                inStock: false,
            },
            { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
            { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
            {
                id: 12,
                name: "Microwave Oven",
                category: "Appliances",
                price: 220,
                inStock: true,
            },

        // Clothing
            { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
            { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
            { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

        // Home Goods
            {
                id: 16,
                name: "Desk Lamp",
                category: "Home Goods",
                price: 35,
                inStock: true,
            },
            {
                id: 17,
                name: "Scented Candle",
                category: "Home Goods",
                price: 15,
                inStock: true,
            },
            {
                id: 18,
                name: "Picture Frame",
                category: "Home Goods",
                price: 22,
                inStock: false,
            },

        // Groceries
            {
                id: 19,
                name: "Organic Apples",
                category: "Groceries",
                price: 5,
                inStock: true,
            },
            {
                id: 20,
                name: "Artisan Bread",
                category: "Groceries",
                price: 8,
                inStock: true,
            },
    ];

    // const newproduct = products.filter((product)=>product.price>100).sort((a,b)=>b.price - a.price).map((product)=>({name:product.name , price:product.price}));
    // console.log(newproduct);


    // ----> reduce <----

    const totalprice = products.reduce((accumulator,currentvalue)=>{
        if(currentvalue.inStock)
            return accumulator+currentvalue.price;

        else
            return accumulator;
    },0);

    console.log(totalprice);



// data structure :- set

// const arr = [10,20,23,43,10,46,43,70,76,76];
// console.log(arr);

// const s1 = new Set(arr);
// s1.add(11);
// s1.delete(10);
// console.log(s1.has(65));
// s1.clear();
// console.log(s1);


// map

// const m1 = new Map([
//     ["sagar",40],
//     ["manas",45],
//     [true,11],
//     [[10,29,47],"ram"],
// ]);

// m1.set({name:"sam",age:34},false);
// console.log(m1);

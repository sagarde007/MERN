// //  concept of promises

// // fetch the api of github users
// const p1 = fetch("https://api.github.com/users");

// // convert to js object by json
// const p2 = p1.then((response)=>{
//     return response.json();
// })

// // print the data in console
// p2.then((data)=>{
//     console.log(data);
// })

// modified form :--

// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json();
// })
// .then((data)={
//     console.log(data);
// })

// create new promises

// const p1 = new Promise((resolve,reject)=>{
//     resolve({
//         name:"sagar",
//         age:22,
//     });
// })

// p1.then((response)=>{
//     console.log(response);
// })
// .then((error)=>{
//     console.log(error);
// })

// fetch("https://api.github.com/users")
// .then((response)=>{
//     console.log(response);
//     if(!response.ok){
//         throw new Error("data is not present in server");
//     }
//     return response.json();
// })
// .then((data)=>{
//     // console.log(data);

//     const parent = document.getElementById("First");

//     for(let i =0; i<data.length;i++){
//         const image = document.createElement('img');
//         image.src = data[i].avatar_url;
//         image.style.height = "400px";
//         image.style.width = "400px";

//         parent.append(image);
//     }
// })
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// })

// js object :-

// const j1 = {
//     name: "sagar",
//     age:22,
//     address:"dwarka",
// }

// // convert to json
// const jsonFormate = JSON.stringify(j1);
// console.log(jsonFormate);

// json to js object :-

// const jsonFormate = `{
//     "name": "Sagar",
//     "age": 30,
//     "address":"dwarka"
// }`;

// // js obkect
// const jsObject = JSON.parse(jsonFormate);
// console.log(jsObject);

// -----------------------------<< >>-------------------------------

// zomato application :-

const orderDetail = {
  orderId: 12345,
  food: ["pizza", "biriyani", "coke"],
  cost: 620,
  customer_name: "sagar",
  customer_location: "gariya",
  resturent_location: "new gariya",
};

function placeOrder(orderDetail){

  console.log(`${orderDetail.cost} payment is processing`);

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.1){
                console.log("your payment is successful");
                orderDetail.status = true;
                resolve("payment is failed");
            }
        
        }, 3000);
    })

  
}

function preparingOrder(orderDetail) {

  console.log(`your food preparation started of ${orderDetail.food}`);

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.05){
                console.log("your order is now prepared");
                orderDetail.token = 123;
                resolve(orderDetail);
            }
            else{
                reject("Food item is not persent at restaurant");
            }
        }, 3000);
    })
}

function pickupOrder(orderDetail){

  console.log(
    `Delivary boy is on the way to pickup the order from ${orderDetail.resturent_location}`,
  );

    return new Promise((resolve , reject)=>{

        setTimeout(() => {

            if(Math.random()>0.05){
                console.log("I have picked up the order");
                orderDetail.received = true;
                resolve(orderDetail);
            }
            else{
                reject("Delivery boy Unable to reach restaurant");
            }
        }, 3000);
    })
}

function deliverOrder(orderDetail) {
  console.log(
    `I am on my way to deliver order on ${orderDetail.customer_location} `,
  );

  return new Promise((resolve , reject)=>{
        setTimeout(() => {
          console.log("Order is Deliver succesfullly");
          orderDetail.delivery = true;
          resolve(orderDetail);
        }, 3000);
  })
}


// use promises :--

placeOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error: ",error);
})
.finally(()=>{
    console.log("i am doing cleanup")
})
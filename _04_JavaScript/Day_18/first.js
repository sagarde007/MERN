const orderDetail = {
    orderId: 12345,
    food: ["pizza","biriyani","coke"],
    cost: 620,
    customer_name: "sagar",
    customer_location: "gariya",
    resturent_location: "new gariya"
}


function placeOrder(orderDetail ,callback){

    console.log(`${orderDetail.cost} payment is processing`);

    setTimeout(()=>{
        console.log("your payment is successful");
        orderDetail.status = true;
        callback(orderDetail);
    },3000);
}

function preparingOrder( orderDetail , callback){

    console.log(`your food preparation started of ${orderDetail.food}`);

    setTimeout(()=>{
        console.log("your order is now prepared");
        orderDetail.token = 123;
        callback(orderDetail);
    },3000)
}

function pickupOrder(orderDetail , callback){

    console.log(`Delivary boy is on the way to pickup the order from ${orderDetail.resturent_location}`);

    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received = true;
        callback(orderDetail);
    },3000)
}

function deliverOrder(orderDetail){

    console.log(`I am on my way to deliver order on ${orderDetail.customer_location} `);

    setTimeout(()=>{
        console.log("Order is Deliver succesfullly");
        orderDetail.delivery = true;
    },3000)
}


//  this is called callback Hell

placeOrder(orderDetail , (orderDetail)=>{
    preparingOrder(orderDetail,(orderDetail)=>{
        pickupOrder(orderDetail , (orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});



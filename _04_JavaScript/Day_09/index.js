//  -----> function <------

// function greeting(){
//     console.log("sagar de");
//     return 10;
// }
// greeting();

// function addNumber(num1 , num2, num3 =0 , num4 =0){
//     const sum = num1 + num2 + num3 + num4;
//     console.log(sum);
// }


// rest operator ---> 

// function addNumber(...num) {
//   let sum =0;
//   for(let n of num){
//     sum+=n;
//   }
//   console.log(sum);
// }



// addNumber(3,4);
// addNumber(9,5);
// addNumber(9,5,6);
// addNumber(9,5,6,10);

// console.log(greeting());

// function expression

// const addNumber = function(num1 , num2){
//     return num1 + num2;
// }
// console.log(addNumber(3,5));

// arrow function

// const addNumber = (num1,num2)=>{
//     console.log("hello");
//     return num1 + num2 ;
// }

// const addNumber = (num1, num2) => num1 + num2;
// const squerNumber = (num) => num * num;

//  if we have only one parameter no need to write ()
//  const squerNumber = num => num * num;  // for one variable 

// console.log(addNumber(3,4));
// console.log(squerNumber(3));


// const greeting = ()=> ({name:"sagar",age:20});
// console.log(greeting());


// LIFE

// (function greeting(){
//     console.log("hello");
// })();


// (()=>{
//     console.log("hi");
// })();


// ----> callback function

// function greet(){
//     console.log("hello ji, kese ho");
// }
// function dance() {
//   console.log("i am dancing in the rock");
// }
// function meet(callback){
//     console.log("i am going to meet someone ");
//     callback();
//     console.log("i am fine");
// }
// meet(greet);
// meet(dance);


//  real life use of callback function

function zomatoOrderPlaced(){
    console.log("we have starting preparing your order");
}
function blinkitOrderPlaced() {
  console.log("we have starting packeging your order");
}

function payment(amount,callback){
    console.log(`${amount} payment has initiated`);
    console.log("payment has received");
    callback();
}

payment(500,zomatoOrderPlaced);
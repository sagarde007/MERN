// scope and closer , HOF

// scope :-- 
            // 1 -> Global  ---> accessible to everyone 
            // 2 -> functional ---> accessible for that function
            // 3 -> Block level scope ---> accessible for that block only

// let a = 10;
// const b = 20;
// // console.log(a);

// if(true){
//     let c = 30;
//     // console.log(c); // only access in this block
//     console.log(b);
// }

// // console.log(c);  // connot be access here 

// function greet(){
//     let d = 40;
//     console.log(d); // only access in this function cannot access outside
//     console.log(a); // access globaly
// }
// greet();


// function creatcounter(){
//     function increment(){
//         console.log("i am increment function");
//     }
//     increment();
// }

// creatcounter();



//  Closer Concept
// function creatcounter(){
//     let count =0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// const counter = creatcounter();
// console.log(counter());
// // console.log(counter());
// // console.log(counter());


// let user = {
//     balance: 500,

//     deposite: function(amount){
//         if(typeof amount == "number" && amount >0){
//             this.balance += amount;
//             return this.balance;

//         }
//     },

//     withdraw: function(amount){
//     if(typeof amount == "number" && amount >0 && this.balance>=amount){
//             this.balance -= amount;
//             return this.balance;

//         }
//     },
//     getbalance: function(){
//         return this.balance;
//     },
// }
// console.log(user.deposite(200));
// console.log(user.withdraw(200));
// console.log(user.getbalance());

//     function createBankAccount(){

//         const user = {
//             balance: 500,

//             deposite: function (amount) {
//                 if (typeof amount == "number" && amount > 0) {
//                     this.balance += amount;
//                     return this.balance;
//                 }
//             },

//             withdraw: function (amount) {
//                 if (typeof amount == "number" && amount > 0 && this.balancebalance >= amount) {
//                     this.balance -= amount;
//                     return this.balance;
//                 }
//             },
//             getbalance: function () {
//                 return this.balance;
//             },
//         };

//         return user;
//     }


// const customer = createBankAccount();
// console.log(customer.deposite(200));


// higher order function 

// function double(value){

//     return function execute(num){
//         return num*value;
//     }
// }
// const n = double(20)(5);
// console.log(n);
// Prototype and Classes --->

// const obj = {
//     name: "sagar",
//     age: 22,
//     greet: function(){
//         console.log("hello ji");
//     }
// };

// console.log(obj.greet());
// obj.greet();

// this two property are not present in obj but we can access this because of prototype this all are present in object.prototype

// console.log(obj.hasOwnProperty("name"));
// console.log(obj.toString());

// const arr = [10,20,30];
// console.log(arr.length);

// const obj2 = {
//     account:30
// }

// obj2.__proto__= obj;

// console.log(obj.hasOwnProperty("name"))

// const obj1 = {
//     name:"Rohit",
//     age:30,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// const obj2 = {
//     name:"Mohit",
//     age:20,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// const obj3 = {
//     name:"Mohan",
//     age:10,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// class :--

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}

// const Person1 = new Person("sagar",20);
// const Person2 = new Person("Manas",23);

// console.log(Person1);

// const ob1 = {
//     name:"Mohan",
//     age:20,
//     greet: function(){

//     }
// };

// console.log(ob1);

// class customer extends Person {
//   constructor(name, age, account, balance) {
//     super(name, age);
//     this.account = account;
//     this.balance = balance;
//   }

//   chackBalance() {
//     return this.balance;
//   }
// }

// const c1 = new customer("sagar", 20, 123, 46654);

// console.log(c1);



const obj = {
  name: "Rohit",
  age: 20,
};

const obj2 = Object.create(obj);
obj2.account = 10;

console.log(obj2.account);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ? means optional property, it may or may not be present in the object
const obj = {
    name: "sagar",
    age: 22,
    gender: "male",
    aadhar: 1234567890
};
// partial means that all the properties of the object are optional. It allows you to create an object with only a subset of the properties defined in the interface.
// const obj2 : Partial<customer> = {
//     name : "sagar",
//     age :22,
//     gender : "male",
//     balance : 1000
// }
// required means that all the properties of the object must be present and cannot be optional. It ensures that the object has all the required properties defined in the interface.
// const obj2: Required<customer> = {
//   name: "sagar",
//   age: 22,
//   gender: "male",
//   balance: 1000,
// };
// readonly means that the properties of the object cannot be modified after they are assigned a value. It makes the object immutable.
const obj2 = {
    name: "sagar",
    age: 22,
    gender: "male",
    balance: 1000,
};
;
const arr = [{ name: "sagar", age: 22 }, { name: "manas", age: 23 }];
// function in ts
// single parameter :-
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
// multiple parameters :-
function meet(msg, val) {
    console.log(msg, val);
}
meet("hello", 10);
// default parameter :-
function neet(msg = "sagar") {
    console.log(msg);
}
neet();
neet("manas");
// optional parameter :-
function Gate(person) {
    console.log(person || "mohan");
}
// arrow function :-
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4));
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
// rest parameter :-
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(23, 34, 45, 56, 6, 72, 34, 7234, 345);
;
const obj8 = {
    name: "sagar",
    age: 22,
    salary: 50000,
    id: 1234
};
//# sourceMappingURL=first.js.map
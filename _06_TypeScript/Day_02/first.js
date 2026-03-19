"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10;
let x = 10; //it define the type of x as number
x = 20;
// x = "Hello"; // it will give error because x is of type number and we are trying to assign a string value to it
let val = "sagar"; // it define the type of val as string
let money; // it define the type of money as any
money = 10;
money = "hello";
// this will not give error because we have not defined the type of money and it can hold any type of value
let val2;
val2 = "hello";
val2 = 10;
if (typeof val2 === "string") {
    console.log(val2.toUpperCase()); // it will work because we have checked the type of val2 before using it
}
if (typeof val2 === "number") {
    console.log(val2.toFixed(2)); // it will work because we have checked the type of val2 before using it
}
// Non primitive data types
let arr = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6];
let arr3 = ["sagar", 6, "hi", 7, 8];
let arr4 = [2, 6, 5, 7, 8, true, false, "hello"];
let tuple = ["sagar", 10, true];
// tuple is a fixed length array which can hold different types of values
// js execute the code as interpreted which execute the code line by line 
// compile time error
// run time error
// objects
let obj1 = { name: "sagar",
    age: 10
};
let c1 = {
    name: "sagar",
    age: 10,
    id: "123"
};
let c2 = {
    name: "sagar",
    age: 10,
    position: "developer"
};
//# sourceMappingURL=first.js.map
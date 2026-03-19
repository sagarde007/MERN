interface person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number
}

// ? means optional property, it may or may not be present in the object

const obj:person = {
    name : "sagar",
    age :22,
    gender : "male",
    aadhar : 1234567890
}


// letest example

interface customer{
    name:string,
    age:number,
    gender:string,
    balance:number
}

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
const obj2: Readonly<customer> = {
  name: "sagar",
  age: 22,
  gender: "male",
  balance: 1000,
};



// Array of objects
interface people{name:string,age:number};
const arr:people[] = [{name:"sagar",age:22},{name:"manas",age:23}];


// function in ts

// single parameter :-
function greet(a:number):number{
    console.log(a);
    return a+5;
}

console.log(greet(10));

// multiple parameters :-
function meet(msg:string , val:number):void{
    console.log(msg,val);
}
meet("hello",10);

// default parameter :-
function neet(msg:string = "sagar"){
    console.log(msg);
}
neet();
neet("manas");

// optional parameter :-
function Gate(person?:string){
    console.log(person || "mohan");
}


// arrow function :-
const sum = (a:number, b:number):number =>{
    return a+b;
}
console.log(sum(3,4));


// callback function :-

type chill = (amount:number)=>void;
function placeOrder(order:number,callback:chill):void{
    const amount:number = order+10;
    callback(amount);

}
placeOrder(10,(amount)=>{
    console.log(amount);
})

// rest parameter :-
function total(...arr:number[]){
    let ans:number =0;
    arr.forEach((val:number)=>ans = ans+val);
    console.log(ans);
}
total(23,34,45,56,6,72,34,7234,345);


// extends keyword :-

interface human{
    name:string,
    age:number
};

interface teacher extends human{
    salary:number,
    id:number
}

const obj8:teacher = {
    name : "sagar",
    age : 22,
    salary : 50000,
    id : 1234
}

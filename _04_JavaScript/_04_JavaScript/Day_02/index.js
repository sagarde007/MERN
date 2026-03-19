// <<<-----------variable kese banate hai---------->>>

// let name = "sagar";
// let age = 20;

// if(true){
//     let c = 90;
// }
// age = 30;
// console.log(name , age);


// const account = 1234;
// account = 23 ;
// console.log(account);

// <<<---------old mathod--------->>>

// var a = 3 ;
// var b = 4 ;
// if(true){
//     var a = 20;
// }
// function fun(){
//     var c = 45;
// }

// <---- data type : ----> 

/*  <--- 1 > primitive data type :- 
   number , string , boolean, undefind , null , bigint , symbol*/ 

// number
let a = 3;
let b = 2.34;
console.log(a , b );
// console.log(typeof a);

// string 
 let c = "sagar is a good boy ";
 let d = "sagar";
 console.log(c , d );

// boolean
let login = true;
let f = false;
console.log(login) , f ;

// undefind
let user;
console.log(user);

// bigint
let num = 12432137526178581754n;
console.log(num)

// NULL
let weather = null;
console.log(weather);
console.log(typeof weather);

// symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id2 == id1);


/* <--- 2 > non primitive data type:-
    array , object , function*/

// Array
let arr = [12 , 23 , 45 , 67 , "sagar" , true] ;
console.log(arr);

// object
let user1 = {
    name : "sagar",
    account :1234,
    age : 22,
    category : "general",
}

// function

// function add(){
//         console.log("hello");
// }
// add();

let s =  function add(){
        console.log("hello");
}
console.log(s);
console.log(typeof s);

// <<<-----primitive data is immutable----->>>

let p = 10;
let q = p;

p = 20;
console.log(p, q);

// let str = "Rohit";
// str = "Mohan";

// console.log(str);

// <<<-----non primitive data is mutable 

let arr1 = [10 ,12 , 34 ,45 ];
arr1.push(90);
arr1[0]= 70;
console.log(arr1);


let obj ={
    name:'sagar',
    age:21
}

let obj2 = obj;

obj2.name = 'manas';
console.log(obj);
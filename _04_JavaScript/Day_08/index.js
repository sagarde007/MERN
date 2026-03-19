// object ----> key value pair 

// const user ={
//     name: "sagar",
//     age: 20,
//     enailid: "sagarde2004@gmail.com",
//     amount: 3400
// }
// console.log(typeof user);

// CURD operation :- Create , read , update , delete 

// user.ph = 9883623741; // create operation

// console.log(user.age);  // read operation

// user.amount = 5000;  // update operation

// delete user.enailid  // delete operation

// // console.log(user);


// const user = {
//   name: "sagar",
//   age: 20,
//   enailid: "sagarde2004@gmail.com",
//   amount: 3400,
// };

// const user2 = user;
// user2.age = 90;
// console.log(user);

// console.log(Object.keys(user)); // shows keys of object
// console.log(Object.values(user)); // shows the value of object
// console.log(Object.entries(user)); // shows keys and value both 


// for(let keys in user){
//     console.log(keys,user[keys]);
// }


// const user = {
//   name: "sagar",
//   age: 20,
//   enailid: "sagarde2004@gmail.com",
//   amount: 3400,
// };

// old process ---> 
// const name = user.name;
// const age = user.age;

// object destructing proces --->
// const {name:username ,age:userage} = user;
// console.log(username,userage);



// const user = {
//   name: "sagar",
//   age: 20,
//   enailid: "sagarde2004@gmail.com",
//   amount: 3400,
// };

// for of loop array

// const temparr = Object.keys(user);
// console.log(temparr);


// for(let keys of temparr){
//     console.log(keys);
// }


// for(let values of Object.values(user)){
//     console.log(values);
// }


// for (let [keys,values] of Object.entries(user)) {
//   console.log(keys,values);
// }



// const user = {
//   name: "sagar",
//   age: 20,
//   enailid: "sagarde2004@gmail.com",
//   amount: 3400,
//   greeting: function(){
//     console.log(`strike is comming soon ${this.name}`);
//     return 20;
//   }
// };

// const va = user.greeting();
// console.log(va);


//  nested object ---> 

// const user = {
//   name: "sagar",
//   age: 20,
//   enailid: "sagarde2004@gmail.com",
//   amount: 3400,
//   address: {
//     city: "kolkata",
//     state: "west bengal",
//   }
// };

//  --> shallow copy 
// const user2 = {...user};
// user2.name = "manas";
// user2.address.city = "kharagpur";
// console.log(user2);


// console.log(user.address.state);

//  Deep copy  

// const user2 = structuredClone(user);
// user2.address.city = "kharagpur";
// console.log(user2);

// Keys --> string  || symbol

const sym = Symbol("id");

const user ={
    name: "sagar",
    age: 20,
    0: 100,
    2: "mohan",
    [sym]: "hello",
}
console.log(user[2]);
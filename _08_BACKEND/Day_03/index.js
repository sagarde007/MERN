const fs = require('fs')
let a = 10;
let b = "hello ji";

console.log(b);

function sum(a,b){
    return a + b;
}

const data = fs.readFileSync("./data.json", "utf-8");
console.log(data);

// fs.readFile("./data.json", "utf-8" ,(err,res)=>{
//     console.log(res);
// })

setTimeout(()=>{
    console.log("Hello timeOut");
},3000);

console.log(a);
console.log(sum(3,8));
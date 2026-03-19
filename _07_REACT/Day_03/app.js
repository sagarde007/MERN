import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//   "h1",
//   {
//     id: "first",
//     className: "sagar",
//     style: { backgroundColor: "red", fontSize: 20, fontFamily: "Arial" },
//   },
//   "hello coder army",
// );
// const element2 = React.createElement(
//   "h2",
//   {
//     id: "first",
//     className: "sagar",
//     style: { backgroundColor: "red", fontSize: 20, fontFamily: "Arial" },
//   },
//   "I am learning react",
// );

// jsx syntax :- we use html like syntax in js file is called jsx syntax

const names = "sagar";
const obj = {
  color: "red",
  fontSize: 20,
  fontFamily: "Arial",
}
const newelement = (
  <div>
    <h1 id="first" className="second">hello coder army {names}</h1>
    <h2 money= {23} style={obj}>I am learning react {obj.color}</h2>
  </div>
);

// react component :- it is a function which return jsx element

function greed(){
  return <h1>kese ho app sab</h1>
};

const meet = () =>{
  return <h2>Thiis is my function</h2>
}


const newelement2 = greed();
const newelement3 = meet();


const Reactroot = ReactDOM.createRoot(document.getElementById("root"));

// Reactroot.render(newelement); 
// Reactroot.render(newelement2);
// Reactroot.render(newelement3);
Reactroot.render(<> {greed()} {meet()}</>);


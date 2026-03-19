import React from "react";
import ReactDom from "react-dom/client";

const element1 = <h1>hello coder army</h1>

// expression in jsx
// js expression in jsx is written inside curly braces but statement is not allowed in jsx



function  Greet(props){
    return <h2>Hello from greet function! {props.name} {props.age}</h2>
}

// user defined tag should be in capital letter otherwise it will be treated as html tag and will not work
const element2 = <Greet name="sagar de" age="22"/>

const Root = ReactDom.createRoot(document.getElementById('root'));
Root.render(element2);
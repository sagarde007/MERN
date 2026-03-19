// create element through js

// const header1 = document.getElementById('h1');
// header1.innerText = "hello coder army";
// header1.style.backgroundColor = "pink";
// header1.style.fontSize = "30px";
// header1.style.color = "white";  

// const header2 = document.getElementById("h2");
// header2.innerText = "i am a react developer";
// header2.style.backgroundColor = "pink";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);


// React : object
// React Dom : object


// create my own react and react dom 

// const React = {

//     createElement: function(tag,propety,children){
//         const element = document.createElement(tag);

//         if(typeof children === "object"){
//             for(let val of children)
//                 element.append(val);
//             }
//         else{
//             element.innerText = children;
//         }

//         for(let key in propety){
//             element.style[key] = propety[key];
//         }
//         return element;
//     }
// }

// const ReactDom = {
//     render: function(element,root){
//         root.append(element);
//     }
// }

// const header1 = React.createElement('h1',{fontSize:"30px", backgroundColor:"blue" , color :"white"},"hello coder army");
// const header2 = React.createElement('h2', {fontSize:"20px", backgroundColor:"green", color:"white"}, "i am a react developer");

// // create unorder list through js


// const li1 = React.createElement('li', {fontSize:"20px", backgroundColor:"yellow", color:"black"}, "html");
// const li2 = React.createElement('li', {fontSize:"20px", backgroundColor:"yellow", color:"black"}, "css");
// const li3 = React.createElement('li', {fontSize:"20px", backgroundColor:"yellow", color:"black"}, "javascript");

// const ul = React.createElement("ul",{fontSize: "20px", backgroundColor: "yellow", color: "black" },[li1,li2,li3]);


// ReactDom.render(header1, document.getElementById("root"));
// ReactDom.render(header2, document.getElementById("root"));

// ReactDom.render(ul, document.getElementById("root"));



// create element through js (without react and react dom) it is a normal way to create element through js it is complex and time consuming process so we use react and react dom to create element in a easy way 

// const header1 = document.getElementById('h1');
// header1.innerText = "hello coder army";
// header1.style.backgroundColor = "pink";
// header1.style.fontSize = "30px";
// header1.style.color = "white";  

// const header2 = document.getElementById("h2");
// header2.innerText = "i am a react developer";
// header2.style.backgroundColor = "pink";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);



const element = React.createElement("h1", {id:"first",className:"sagar",style:{backgroundColor:"red",fontSize:20,fontFamily:"Arial"}}, "hello coder army");
const element2 = React.createElement("h2", {id:"first",className:"sagar",style:{backgroundColor:"red",fontSize:20,fontFamily:"Arial"}}, "I am learning react");

// ReactDOM.render(element, document.getElementById('root'));

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// Reactroot is a react container which is responsible for rendering the react element in the dom

// Reactroot.render(element);
// Reactroot.render(element2);

const div1 = React.createElement('div',{},[element,element2]);
Reactroot.render(div1);






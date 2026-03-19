const element = React.createElement("h1",{},"hello coder army");

// ReactDOM.render(element, document.getElementById('root'));

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot is a react container which is responsible for rendering the react element in the dom
Reactroot.render(element);


// CDN :- content delivery network
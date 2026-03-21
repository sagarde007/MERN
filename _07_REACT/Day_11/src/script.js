import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Increment from "./increments";
import Decrement from "./decrement";

function App(){
    
    const [count, setCount] = useState(0);

    return (
      <>
        <h1>Hello Coder Army</h1>
        <Increment Counts={count} setCounts={setCount}/>
        <Decrement Counts={count} setCounts={setCount}/>
      </>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
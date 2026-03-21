import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Second from "./Second";
import GlobalContext from "./src/Global";
import { useContext } from "react";

function App(){
    
    const [count, setCount] = useState(10);


    return (
      <>
        <GlobalContext.Provider value={{ count, setCount }}>
          <h1>Hello Coder Army</h1>
          <Second />
        </GlobalContext.Provider>
      </>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
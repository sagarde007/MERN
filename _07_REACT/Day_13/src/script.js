import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import stores from "../Store";
import Counting from "./counting";
import CustomCounter from "./CustomCounter";

function App(){
    
    return (
      <>
        <Provider store={stores}>
          <Counting></Counting>
          <br></br>
          <br></br>
          <br></br>
          <CustomCounter></CustomCounter>
        </Provider>
      </>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
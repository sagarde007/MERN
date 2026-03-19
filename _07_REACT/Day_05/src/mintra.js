import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy"
import {} from "./utils/dummy"


function App(){

  let [A , SetA] = useState(arr);

  function sortArray(){
    A.sort((a,b)=> a.price-b.price);
    SetA([...A]);
  }

  function priceabove499(){
    const B = arr.filter((value)=>value.price>499);
    SetA(B);
  }

  return (
    <>
        <Header/>
        <button onClick={sortArray}>Sort By Price</button>
        <button onClick={priceabove499}>Price Above 499</button>
        <div className="middle" style={{ display: "flex", gap: "10px" , flexWrap:"wrap"}}>
          {
            A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer}
            price={value.price}/>)
          }
        </div>
        <Footer/>
    </>
  );
}
const Root = ReactDom.createRoot(document.getElementById('root'));
Root.render(<App/>);
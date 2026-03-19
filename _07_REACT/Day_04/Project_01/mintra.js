import React from "react";
import ReactDom from "react-dom/client";

function Card(props){
    return (
      <div className="card" style={{border :"2px solid black" , padding:"2px"}}>
        <img src="https://tse2.mm.bing.net/th/id/OIF.sqw4ErBCvOe472lSML2F6w?pid=Api&P=0&h=180" height={200} width={200}></img>
        <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Shop now</h2>
        </div>
      </div>
    );
}

function Header(){
  return (
    <div className="heading">
      <img className="images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4qLGL1VttQkbSFm1dcaq28xrY5weD8hTRP4QiClSqg&s" height={40} width={40}/>
      <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
      </div>

      <input placeholder="search for product brands and more" className="searchbar"></input>

      <div className="profile">
        <button className="pro">Profile</button>
        <button className="pro">Wishlist</button>
        <button className="pro">more</button>
      </div>
    </div>
  );
}

function Footer(){
  return (
    <img className="fot" src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-indias-largest-online-fashion-store-logo-2.png" height={150}/>
  );
}

const arr = [{cloth:"T-shirt", offer:"20-80% off"},{cloth:"Jeans", offer:"30-70% off"},{cloth:"Shoes", offer:"10-60% off"},{cloth:"Jackets", offer:"40-90% off"},{cloth:"Hoodies", offer:"25-75% off"},{cloth:"Sweaters", offer:"35-85% off"},{cloth:"Socks", offer:"15-50% off"},{cloth:"Hats", offer:"20-60% off"},{cloth:"Gloves", offer:"10-40% off"},{cloth:"Scarves", offer:"25-70% off"},{cloth:"Dresses", offer:"30-80% off"},{cloth:"Skirts", offer:"20-70% off"},{cloth:"Shorts", offer:"15-60% off"},{cloth:"Blouses", offer:"25-75% off"},{cloth:"Coats", offer:"40-90% off"},{cloth:"Suits", offer:"30-80% off"},{cloth:"Trousers", offer:"20-70% off"},{cloth:"Leggings", offer:"10-50% off"}];

function App(){
  return (
    <>
    
        <Header/>
      
      <div className="middle" style={{ display: "flex", gap: "10px" , flexWrap:"wrap"}}>
        {/* <Card cloth="T-shirt" offer="20-80% off"/>
        <Card cloth="Jeans" offer="30-70% off"/>
        <Card cloth="Shoes" offer="10-60% off"/>
        <Card cloth="Jackets" offer="40-90% off"/>
        <Card cloth="Hoodies" offer="25-75% off"/>
        <Card cloth="Sweaters" offer="35-85% off"/>
        <Card cloth="Socks" offer="15-50% off"/>
        <Card cloth="Hats" offer="20-60% off"/>
        <Card cloth="Gloves" offer="10-40% off"/>
        <Card cloth="Scarves" offer="25-70% off"/> */}

        {
            arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/>)
        }
      </div>
      <Footer/>
    </>
  );
}
const Root = ReactDom.createRoot(document.getElementById('root'));
Root.render(<App/>);
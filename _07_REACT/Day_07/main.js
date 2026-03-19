import React , {useState , useEffect} from "react";
import ReactDOM from "react-dom/client";


// Background colour changer 

function Main(){

    const [color, setColor] = useState("black");


    // useEffect Hooks  :- useEffect(callback function dependency)

    useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color]);


    return (
      <>
        <h1>BackGround colour changer</h1>
        <div className="but">
          <button style={{ backgroundColor: "red" }} onClick={()=>setColor("red")}>Red</button>
          <button style={{ backgroundColor: "blue" }} onClick={()=>setColor("blue")}>Blue</button>
          <button style={{ backgroundColor: "orange" }} onClick={()=>setColor("orange")}>Orange</button>
          <button style={{ backgroundColor: "green" }} onClick={()=>setColor("green")}>Green</button>
          <button style={{ backgroundColor: "pink" }} onClick={()=>setColor("pink")}>Pink</button>
        </div>
      </>
    );
}





ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);
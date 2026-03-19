import React , {useState} from "react"
import ReactDom from "react-dom/client"

function Counter(){
    let [count , setcount] = useState(0);

    function incrementnumber(){
        count = count + 1;
        setcount(count);
        // console.log("count value is: ", count);
        // document.querySelector('h1').innerText = `Count is ${count}`;
    }

    function decrementnumber(){
        count = count -1;
        setcount(count);
        // console.log("count value is: ",count);
        // document.querySelector("h1").innerText = `Count is ${count}`;
    }

    return(
        <div className="first">
            <h1>Count is: {count}</h1>
            <button onClick={incrementnumber}>Increment</button>
            <button onClick={decrementnumber}>Decrement</button>
        </div>
    )
}




ReactDom.createRoot(document.getElementById('root')).render(<Counter/>)
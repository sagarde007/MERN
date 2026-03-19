import React , {useState,useEffect,useMemo, useCallback} from "react";
import ReactDOM from "react-dom/client"





function App(){
    
    const [count, setcount] = useState(0);
    const [number,setnumber] = useState("");
    // const [Result,setResult] = useState(null);


    const Fibbonachi = useCallback((n)=>{
              if (n <= 1) return n;

              return Fibbonachi(n - 1) + Fibbonachi(n - 2);
    },[]);

    const Result = useMemo(()=>Fibbonachi(number),[number])

    // useEffect(()=>{
    //     setResult(Fibbonachi(number));
    // },[number])

    return(
        <>
            <h1>Counter is : {count}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <button onClick={()=>setcount(count-1)}>Decrement</button>


            <div>
                <h2>Fibonnachi Number is : {Result}</h2>
                <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)}></input>
            </div>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
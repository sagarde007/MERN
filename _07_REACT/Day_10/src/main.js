import React , {useState,useEffect,useMemo, useCallback, useRef} from "react";
import ReactDOM from "react-dom/client"





// function App(){
    
//     const [count, setcount] = useState(0);
//     const money = useRef(0);

   
//     return (
//       <>
//         <h1>Counter is : {count}</h1>
//         <button onClick={() => setcount(count + 1)}>Increment</button>

//         <h1>Money is : {money.current}</h1>
//         <button onClick={()=>{money.current = money.current+1}}>Increment</button>
//       </>
//     );
// }



function Stopwatch(){

    const [time , setTime] = useState(0);
    const [isrunning , setIsrunning] = useState(false);
    const intervalref = useRef(null);

    function start(){

        if(!isrunning){
            intervalref.current = setInterval(() => {
              setTime((prevTime) => prevTime + 1);
            }, 1000);

            setIsrunning(true);
        }
        
    }

    function stop(){
        if(isrunning){
            clearInterval(intervalref.current);
            intervalref.current = null;
            setIsrunning(false);
        }
        
    }


    function reset(){
        clearInterval(intervalref.current);
        intervalref.current = null;
        setTime(0);
    }


    return (
      <>
        <h2>StopWatch is : {time}</h2>
        <button  onClick={start}>Start</button>
        <br></br>
        <br></br>
        <button onClick={stop}>Stop</button>
        <br></br>
        <br></br>
        <button onClick={reset}>Reset</button>
        <br></br>
        <br></br>
      </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch></Stopwatch>)
import { useState } from "react"
import Decrement from "./decrement"
export default function Increment({Counts , setCounts}){


    return(
        <>
            <h2>Child Counter is :{Counts}</h2>
            <button onClick={()=>setCounts(Counts+1)}>Increment</button>
            
        </>
    )
}
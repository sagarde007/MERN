import GlobalContext from "./src/Global"
import { useContext } from "react"


export default function Third(){

    const data = useContext(GlobalContext);
    return(
        <>
            <h2>My count is : {data}</h2>
        </> 
    )
}
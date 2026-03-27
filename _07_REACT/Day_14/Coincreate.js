import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slicer1";

export default function CoinCreate(){

    const dispatch = useDispatch();
    const {data,loading , error } = useSelector((state)=>state.slicer1);
    useEffect(()=>{
        dispatch(fetchData(20));
    },[])


    if(loading){
        <h1>Data is Loading</h1>
    }
    if(error){
        <h1>Error is Occured</h1>
    }
    return(
        <>
        <div style={{display:"flex", flexWrap:"wrap"}}>
                {data.map((value)=><CoinCard key={value.id} coin={value}></CoinCard>)}
        </div>
        </>
    )
}
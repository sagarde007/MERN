import { useState } from "react";
import { addItmes , removeItmes } from "./slice2";
import { useDispatch } from "react-redux";


export default function FoodCart(value){


    const [inCart , setInCart] = useState(false);
    const dispatch = useDispatch()
    
        function handleClick(){
            if(inCart){
                dispatch(removeItmes())
                setInCart(false);
            }
            else{
                dispatch(addItmes())
                setInCart(true);
            }
        }

        return (
          <>
            <h1>{value.food}</h1>
            <h2>{value.Price}</h2>
            <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
          </>
        );
}
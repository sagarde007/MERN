import { useState } from "react"
import FoodCart from "./FoodCart"

const foodItmes = [
    {id:1, food:"pizza", Price:"200"},
    {id:2, food:"misti", Price:"100"},
    {id:3, food:"eggroll", Price:"400"},
    {id:4, food:"Biriyani", Price:"500"},
    {id:5, food:"kabab", Price:"223"},
    {id:6, food:"burger", Price:"260"},
    {id:7, food:"cake", Price:"800"},
    {id:8, food:"polao", Price:"289"},
    {id:9, food:"pasta", Price:"209"},
    {id:10, food:"rice", Price:"199"},
]

export default function Card(){

    

    return(
        <div style={{display:"flex", justifyContent:"center" , flexWrap:"wrap" ,gap:"20px"}}>
            {foodItmes.map((value)=>{
                return(
                    <div key={value.id}>
                        <FoodCart value={value}></FoodCart>
                    </div>
                )
            })}
        </div>
    )
}
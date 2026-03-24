import { createSlice } from "@reduxjs/toolkit";


const FoodSlicer = createSlice({
    name:"slice2",
    initialState: {count:0},
    reducers:{
        addItmes: (state)=>{state.count++},
        removeItmes: (state)=>{state.count--},
    }
})

export default FoodSlicer.reducer
export const {addItmes , removeItmes} = FoodSlicer.actions
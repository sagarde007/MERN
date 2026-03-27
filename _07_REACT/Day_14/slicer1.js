import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

// {type : "Coin/fetch" , payload}

const fetchData = createAsyncThunk(
    'Coin/fetch',

    async (args , thunkApi)=>{

        try{
            const response = await fetch();
            const data = await response.json();
            return data;
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)


const slicer1 = createSlice({
    name:'slice1',
    initialState: {data:[], loading:false , error:null},
    reducers: {},

    extraReducers: (builder)=>{
        builder
        .addCase(fetchData.pending , (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchData.fulfilled , (state , action)=>{
            state.data = action.payload;
            state.loading = false;
        } )
        .addCase(fetchData.rejected , (state , action)=>{
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export default slicer1.reducer;
export {fetchData};
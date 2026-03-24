import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice2"

const Stores = configureStore({
    reducer: {
        slice2:CartReducer
    }
})

export default Stores
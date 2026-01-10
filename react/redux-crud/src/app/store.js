import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "../Slice/userSlice";
import  produSlice  from "../Slice/produSlice";

export const store = configureStore({
    reducer:{
        users : userSlice,
        products : produSlice
    }
})
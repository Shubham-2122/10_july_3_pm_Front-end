import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const countSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        // inc,dec,
        increment : (state)=>{
            state.value += 1;
        },
        decrement : (state)=>{
            state.value -= 1; 
        },
        Zero : (state)=>{
            state.value = 0;
        }
    }
})

export const {increment,decrement,Zero} = countSlice.actions

export default countSlice.reducer;
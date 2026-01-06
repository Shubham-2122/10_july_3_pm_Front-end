import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : ["shubham","Het"]
}

export const todoSlice = createSlice({
    name:"Todos",
    initialState,
    reducers:{
        AddData : (state,action)=>{
            state.todo.push(action.payload)
        }
    }
})

export const {AddData} = todoSlice.actions

export default todoSlice.reducer;
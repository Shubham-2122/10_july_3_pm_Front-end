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
        },
        deleteTodo : (state,action)=>{
            state.todo = state.todo.filter((data,index)=> index !== action.payload)
        }
    }
})

export const {AddData,deleteTodo} = todoSlice.actions

export default todoSlice.reducer;
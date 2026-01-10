import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const readpro = createAsyncThunk(
    'readpro',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/products")
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const produSlice = createSlice({
    name:"Product",
    initialState :{
        loading : false,
        products : [],
        error : ""
    },
    reducers:{
        prodPending:(state,action)=>{
            state.loading = true
        },
        prodFullfeild:(state,action)=>{
            state.loading = false
            state.products.push(action.payload)
        },
        produReject:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(readpro.pending,(state,action)=>{
            state.loading =  true
        })
        .addCase(readpro.fulfilled,(state,action)=>{
            state.loading =  false
            state.products = action.payload
        })
        .addCase(readpro.rejected,(state,action)=>{
            state.loading =  false
            state.error = action.payload
        })
    }
})

export const {prodPending,prodFullfeild,produReject} = produSlice.actions;

export default produSlice.reducer;
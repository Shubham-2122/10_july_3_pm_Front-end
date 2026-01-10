import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// data Read
export const readdata = createAsyncThunk(
    'readdata', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/users")
            const result = await res.data;
            return result;

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// create
export const createdata = createAsyncThunk(
    'createdata', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/users", data)
            const result = await res.data;
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// delete
export const deletedata=createAsyncThunk(
    'deletedata',async(id,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`http://localhost:3000/users/${id}`)
            const result = await res.data
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name: "Users",
    initialState: {
        loading: false,
        users: [],
        error: ""
    },
    reducers: {
        userpeding: (state, action) => {
            state.loading = true;
        },
        userFullfield: (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        },
        userReject: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(readdata.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(readdata.fulfilled, (state, action) => {
                state.loading = false,
                    state.users = action.payload
            })
            .addCase(readdata.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // created
            .addCase(createdata.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createdata.fulfilled, (state, action) => {
                state.loading = false,
                    state.users.push(action.payload)
            })
            .addCase(createdata.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // delete
            .addCase(deletedata.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deletedata.fulfilled, (state, action) => {
                state.loading = false,
                state.users = state.users.filter((data,index) => index != action.payload)
            })
            .addCase(deletedata.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { userFullfield, userReject, userpeding } = userSlice.actions;

export default userSlice.reducer;
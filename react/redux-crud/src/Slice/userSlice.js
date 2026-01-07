import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"Users",
    initialState : {
        loading : false,
        users : [],
        error : ""
    },
    reducers:{
        userpeding : (state,action)=>{
            state.loading = true;
        },
        userFullfield : (state,action)=>{
            state.loading = false
            state.users.push(action.payload)
        },
        userReject : (state,action)=>{
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {userFullfield,userReject,userpeding} = userSlice.actions;

export default userSlice.reducer;
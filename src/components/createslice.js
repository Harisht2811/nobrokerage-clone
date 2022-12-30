import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
   name:"user",
   initialState:{
    user:null,
    loginUser:null,
   },
   reducers:{
    signup:(state,action)=>{
        state.user = action.payload
    },
    login:(state,action)=>{
        state.loginUser = action.payload;
    },
    // logout:(state)=>{
    //     state.user = null
    // },
   }
})


export const {signup,login} = userSlice.actions;

export const selectUser = (state)=>state.user.user;
export const selectloginUser = (state)=>state.user.loginUser;


export default userSlice.reducer;

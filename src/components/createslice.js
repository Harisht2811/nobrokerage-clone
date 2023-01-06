import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
   name:"user",
   initialState:{
    user:null,
    loginUser:null,
    userData:null,
   },
   reducers:{
    signup:(state,action)=>{
        state.user = action.payload
    },
    login:(state,action)=>{
        state.loginUser = action.payload;
    },
    userDetails:(state,action)=>{
        state.userData = action.payload
    }
    // logout:(state)=>{
    //     state.user = null
    // },
   }
})


export const {signup,login,userDetails} = userSlice.actions;

export const selectUser = (state)=>state.user.user;
export const selectloginUser = (state)=>state.user.loginUser;
export const selectuserDetails = (state)=>state.user.userData;



export default userSlice.reducer;

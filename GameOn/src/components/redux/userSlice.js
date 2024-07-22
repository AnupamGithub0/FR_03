import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetching: false,
  currentUser: null,
  updateuserCoin: null,
  error: false,
  items:[],
  userRoomIdAndPass : null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchingStart: (state) => {
      state.fetching = true;
    },
    fetchingSuccess: (state, action) => {
      state.fetching = false;
      state.currentUser = action.payload;
      state.updateuserCoin = null; // reset updateuserCoin on new user login
    },
    updateUserPrice: (state, action) => {
      state.fetching = false;
      state.updateuserCoin = action.payload;
      if (state.currentUser) {
        state.currentUser.data.coins = action.payload.coins; // update currentUser coins
      }
    },
    fetchingFailed: (state) => {
      state.fetching = false;
      state.error = true;
    },
    addRoomIdPassword:(state,action)=>{
      state.fetching = false
      state.items.push(action.payload)
    },
    adduserRoomIdAndPass : (state,action)=>{
      state.fetching = false
      state.userRoomIdAndPass = action.payload
    }
  },
});

export const { fetchingStart, fetchingFailed, fetchingSuccess, updateUserPrice,adduserRoomIdAndPass } = userSlice.actions;
export default userSlice.reducer;

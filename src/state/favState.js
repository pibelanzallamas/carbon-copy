import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    id: null,
    style: null,
    format: null,
    color: null,
  },
  reducers: {
    setFav: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFav } = favSlice.actions;
export default favSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userState";
import favReducer from "./favState";

const store = configureStore({
  reducer: {
    user: userReducer,
    fav: favReducer,
  },
});

export default store;

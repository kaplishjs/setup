import loginSlice from "./slices/loginSlice";
import { combineReducers } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";


export default combineReducers({
    login:loginSlice,
    blogData : blogSlice
})
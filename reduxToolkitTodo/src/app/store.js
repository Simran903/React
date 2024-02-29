import { configureStore } from "@reduxjs/toolkit";
import todoreducer from '../features/todo/todoSlice.js'

export const store = configureStore({
    reducer: todoreducer
})
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../slice/todosSlice'
//todosSlice > todosReducer

const store = configureStore({
    reducer: {
        todos: todosReducer,
    }
})

export default store
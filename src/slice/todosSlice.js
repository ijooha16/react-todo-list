import { createSlice } from "@reduxjs/toolkit"

//initialState
//createSlice (name, initialState, reducers)

const initialState = {
    todos: [],
    inputText: ''
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        ADD_TODO: (state, action) => {
            return {...state, todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]}
        },
        DELETE_TODO: (state, action) => {
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        },
        TOGGLE_TODO: (state, action) => {
            return {...state, todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)}
        },
        SET_INPUT_TEXT: (state, action) => {
            return {...state, inputText: action.payload}
        },
    }
})

export const { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_INPUT_TEXT } = todosSlice.actions
export default todosSlice.reducer;
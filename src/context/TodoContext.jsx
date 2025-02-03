import { createContext, useReducer } from "react"

//action
//initialState
//reducer
//creatContext
//Provider

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_INPUT_TEXT = 'SET_INPUT_TEXT'

const initialState = {
    todos: [],
    inputText: ''
}

function reducer(state, action) {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]} //payload: text input
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case TOGGLE_TODO:
            return {...state, todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)}
        case SET_INPUT_TEXT:
            return {...state, inputText: action.payload}
    }
}

const TodoContext = createContext();

function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider, ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_INPUT_TEXT }
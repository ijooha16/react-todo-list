import { useContext } from 'react'
import { TodoContext, ADD_TODO, SET_INPUT_TEXT } from "../context/TodoContext"

function TodoInput() {
    const {state, dispatch} = useContext(TodoContext)
    const { inputText } = state //구조분해 할당, state.inputText

    function handleInput(e) {
        dispatch({type: SET_INPUT_TEXT, payload: e.target.value})
    }

    function handleBtn() {
        if (inputText.trim()) {
            dispatch({type: ADD_TODO, payload: inputText})
            dispatch({type: SET_INPUT_TEXT, payload: ''})
        }
    }
    
    return (
        <div className="input_container">
            <input value={inputText} onChange={handleInput}></input>
            <button onClick={handleBtn}>Add Todo</button>
        </div>
    )
}

export default TodoInput
import { useDispatch, useSelector } from "react-redux"
import { ADD_TODO, SET_INPUT_TEXT } from "../slice/todosSlice"

function TodoInput() {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.todos.inputText)

    function handleInput(e) {
        dispatch(SET_INPUT_TEXT(e.target.value))
    }

    function handleBtn() {
        if (inputText.trim()) {
            dispatch(ADD_TODO(inputText))
            dispatch(SET_INPUT_TEXT(''))
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
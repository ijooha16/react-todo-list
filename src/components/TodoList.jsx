import { useContext } from "react"
import { DELETE_TODO, TOGGLE_TODO, TodoContext } from "../context/TodoContext"
import './components.css'

function TodoList() {
    const {state, dispatch} = useContext(TodoContext)
    const { todos } = state;

    function handleToggleBtn(id) {
        dispatch({type: TOGGLE_TODO, payload: id})
    }
    
    function handleDeleteBtn(id) {
        dispatch({type: DELETE_TODO, payload: id})
    }
    
    return (
        <div className="list_containter">
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span onClick={() => handleToggleBtn(todo.id)}
                            style={{textDecoration: todo.completed ? 'line-through' : 'none',
                                    opacity: todo.completed ? 0.4 : 1
                            }}>{todo.text}</span>
                        <span className="delete_btn" onClick={() => handleDeleteBtn(todo.id)}>delete</span>
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default TodoList

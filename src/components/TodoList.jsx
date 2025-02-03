import { useDispatch, useSelector } from "react-redux";
import { DELETE_TODO, TOGGLE_TODO } from "../slice/todosSlice"
import './components.css'

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos)

    function handleToggleBtn(id) {
        dispatch(TOGGLE_TODO(id))
    }
    
    function handleDeleteBtn(id) {
        dispatch(DELETE_TODO(id))
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
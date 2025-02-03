import { Provider } from 'react-redux'
import store from './config/configureStore'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <h1>
        Todo List
      </h1>
      <TodoInput/>
      <TodoList/>
    </Provider>
  )
}

export default App

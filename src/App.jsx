import { useState } from 'react'
import TodoInput from './Components/TodoInput'
import Todolist from './Components/Todolist'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (task) => {
    if (task.trim() === '') return
    const newTodo = {
      id: Date.now(),
      task,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <>
      <TodoInput onAddTodo={addTodo} />
      <Todolist todos={todos} onDelete={deleteTodo} onToggleComplete={toggleComplete} />
    </>
  )
}

export default App

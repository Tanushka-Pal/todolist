import React, { useState } from 'react'

export default function TodoInput({ onAddTodo }) {
  const [input, setInput] = useState('')

  const handleAdd = () => {
    onAddTodo(input)
    setInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <main>
      <header>
        <input 
          type="text" 
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAdd}>Add Task</button>
      </header>
    </main>
  )
}

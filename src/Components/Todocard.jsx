import React from 'react'

export default function Todocard({ todo, onDelete, onToggleComplete }) {
  return (
    <div className="todoItem">
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
      />
      <p 
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          opacity: todo.completed ? 0.5 : 1
        }}
      >
        {todo.task}
      </p>
      <div className="actionsContainer">
        <button onClick={() => onDelete(todo.id)}>🗑️</button>
      </div>
    </div>
  )
}

import React from 'react'
import Todocard from './Todocard'

export default function Todolist({ todos, onDelete, onToggleComplete }) {
  return (
    <div className="main">
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
          No tasks yet. Add one to get started!
        </p>
      ) : (
        todos.map(todo => (
          <Todocard 
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  )
}

import React from 'react';

export function TodoList({todo, toggletodo, deleteTodo})
{
    return(
      <ul className="list">
        {todo.length===0 && "No Items"}
      {
        todo.map(todo1=>{return(
          <li key={todo1.id}>
          <label>
            <input type="checkbox" checked={todo1.completed} 
            onChange={e=> toggletodo(e.target.checked,todo1.id)}/>
            <span className={todo1.completed ? "strikeThrough" : ""}>{todo1.title}</span>
          </label>
          <button className="btn btn-danger" onClick={() => deleteTodo(todo1.id)}> Delete </button>
        </li>)
        }  
        )
      }
      </ul>
    )
}
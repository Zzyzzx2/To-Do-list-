import { useEffect, useState } from "react"
import "./style.css"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList";
import React from 'react';

export default function App()
{
    const [todo,setTodo]=useState(
      () => {
        const localValue = localStorage.getItem("Item1")
        if(localValue=== null) return []
        return JSON.parse(localValue)
      }
    )

    useEffect(
      ()=>{
        localStorage.setItem("Item1", JSON.stringify(todo))
      }, [todo])

    function addTodo(title)
    {
      setTodo(
        currentTodos=> {return[
          ...currentTodos, {id: crypto.randomUUID(), title, completed:false}
,        ]}
      );
    }
    function toggletodo(completed,id)
    {
        setTodo(
          currentTodos=> {
            return currentTodos.map(todo1=>{
              if(todo1.id ===id)
              {
                
                return {...todo1, completed}
              }
              return  todo1;
            })
          }
        )
    }

    function deleteTodo(id)
    {
      setTodo(
        curTodo =>{
          return curTodo.filter(td1 => td1.id !== id)
        }
      )
    }
    return( 
    <>

      <TodoForm onSubmit={addTodo}/>
      
      <h1 className=""> Todo List </h1>
      <TodoList todo={todo} toggletodo={toggletodo} deleteTodo={deleteTodo}/>
    </>
    )
}
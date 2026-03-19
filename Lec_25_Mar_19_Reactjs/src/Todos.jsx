import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Todos = () => {

  const [todos, setTodos] = useState([])
  const [loading,setLoading]= useState(false)

  async function getTodos() {
    try {
      setLoading(true)
      // let res= await fetch(import.meta.env.VITE_API_URL)
      // let todos=await res.json()
      // setTodos(todos.slice(0,10))
      let res = await axios(import.meta.env.VITE_API_URL)
      let todos = res.data
      setTodos(todos.slice(0, 10))
      // console.log(todos)
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log('error in fetching todos: ',error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      <h2>Todos:</h2>
      {
        loading&&<p>Loading...</p>
      }
      {
        todos.length>0 && todos?.map(todo => {
          return (
            <li key={todo.id}>{todo.id} {todo.title}</li>
          )
        })
      }
    </div>
  )
}

export default React.memo(Todos)

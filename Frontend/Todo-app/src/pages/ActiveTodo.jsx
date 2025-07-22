import axios from 'axios'
import { useState, useEffect } from 'react'
import TodoDisplay from '../components/TodoDisplay.jsx'

const ActiveTodo = () => {
  const [userdata, setUserdata] = useState(null) // Initialize as null since we expect an object
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  

  // const handledeleteTodo = async (id) => {
  //   try {
  //     await axios.patch(`api/todo/${id}`,{todoStatus: true})  
  //   } catch (error) {
  //     console.error("Error deleting todo:", error)
  //   }
  // }
  

const handledeleteTodo = async(id) => {
  try {
       await axios.patch(`api/todo/${id}`,{todoStatus: true})  
    } catch (error) {
      console.error("Error deleting todo:", error)
    }
}

  const getdata = async () => {
    try {
      const res = await axios.get("api/todo/")
      const filterdata = res.data.filter((userdata) => userdata.todoStatus === false)
      setUserdata(filterdata) // This is likely a single TODO object
    } catch (error) {
      console.error("Error fetching data:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    getdata()
  }, [userdata]) // Proper empty dependency array

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!userdata) return <div>No todo found</div>

  return (
    <div>
      <h2>Todo Details</h2>
      {userdata.map((userdata) => {
        return (
          <div key={userdata._id}>
            <TodoDisplay onDelete={handledeleteTodo}
            _id={userdata._id}
            todoName={userdata.todoName} 
            todoDescription={userdata.todoDescription}
             todoStatus={userdata.todoStatus} 
             todoPriority={userdata.todoPriority} /> 
             </div>
        )
      })}
    </div>
  )
}

export default ActiveTodo

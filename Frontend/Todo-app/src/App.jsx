import { Routes , Route } from 'react-router-dom'
import './App.css'
import AddTodo from './pages/AddTodo.jsx'
import GetTodo from './pages/GetTodo.jsx'
import ActiveTodo from './pages/ActiveTodo.jsx'
import CompletedTodo from './pages/CompletedTodo.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <>
    <NavBar />
     <Routes>
      <Route path='/GetTodo' element={<GetTodo />} />
      <Route path='/AddTodo' element={<AddTodo />} />
      <Route path='/ActiveTodo' element={<ActiveTodo />} />
      <Route path='/CompletedTodo' element={<CompletedTodo />} />
     </Routes>
    </>
  )
}

export default App

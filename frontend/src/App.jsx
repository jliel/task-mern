import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='container'>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import Add from './components/Add/Add'
import Navbars from './components/Navbars/Navbars'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbars />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Add' element={<Add />}></Route>
        
        
      </Routes>


    </>
  )
}

export default App

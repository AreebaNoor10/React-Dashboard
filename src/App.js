import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/about' exact element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
                             
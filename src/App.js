import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/dashboard' exact element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

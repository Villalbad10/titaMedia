import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../containers/login'

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Login />} />
         </Routes>
      </BrowserRouter>
   )
}

export default AppRouter
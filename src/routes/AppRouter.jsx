import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Iniciar from '../containers/Iniciar'

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Iniciar />} />
         </Routes>
      </BrowserRouter>
   )
}

export default AppRouter
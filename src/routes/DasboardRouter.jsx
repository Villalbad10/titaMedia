import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'

export const DasboardRouter = () => {
   return (
      <>
         <Routes>
            <Route path='/home' element={<Home />} />
         </Routes>
      </>
   )
}

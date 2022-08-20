import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Iniciar from '../containers/Iniciar'
import { DasboardRouter } from './DasboardRouter'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>

            <Route path='/login' element={
               <PublicRoutes isAuth={false} >
                  <Iniciar />
               </PublicRoutes>
            } />

            <Route path='/*' element={
               <PrivateRoutes isAuth={true} >
                  <DasboardRouter />
               </PrivateRoutes>
            } />

         </Routes>
      </BrowserRouter>
   )
}

export default AppRouter
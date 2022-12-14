import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Iniciar from '../containers/Iniciar';
import { useDispatch } from 'react-redux';
import { DasboardRouter } from './DasboardRouter'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import { dataLogin } from '../redux/todo.slice';

const AppRouter = () => {
   const dispatch = useDispatch()
   const [checkAuth, setCheckAuth] = useState(true)
   const [logget, setLogget] = useState(false)

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            setLogget(true)
            dispatch(dataLogin(user.reloadUserInfo))
         } else {
            setLogget(false)
         }
         setCheckAuth(false)
      })
   }, [setLogget, setCheckAuth])

   if (checkAuth) return (<h1 style={{ "color": "white" }}>Espere...</h1>)

   return (
      <BrowserRouter>
         <Routes>

            <Route path='/login' element={
               <PublicRoutes isAuth={logget} >
                  <Iniciar />
               </PublicRoutes>
            } />

            <Route path='/*' element={
               <PrivateRoutes isAuth={logget} >
                  <DasboardRouter />
               </PrivateRoutes>
            } />

         </Routes>
      </BrowserRouter>
   )
}

export default AppRouter
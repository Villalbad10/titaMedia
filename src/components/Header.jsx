import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../firebase/logout';
import { ImExit } from 'react-icons/im';

const Header = () => {
   const { data } = useSelector(store => store.todos);
   const dispatch = useDispatch()
   return (
      <header>
         <section className='container cabecera'>
            <span className='dataUser'>
               <img src={data.photoUrl} alt="" />
               <h3>{data.displayName}</h3>
            </span>
            <img className='header-logo' src="https://res.cloudinary.com/villalbad10/image/upload/v1661129359/titaMedia/Group_9_1_p2afnh.png" alt="TitaNet" />
            <span>
               <button onClick={() => dispatch(logoutAction())} className='salir' type="button" value="Salir"><ImExit /> Salir</button>
            </span>
         </section>
      </header>
   )
}

export default Header
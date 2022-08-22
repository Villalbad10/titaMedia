import React from 'react'
import { useSelector } from 'react-redux'
import Boton from './Boton'

const Header = () => {
   const { data } = useSelector(store => store.todos);
   return (
      <header>
         <section className='container cabecera'>
            <span className='dataUser'>
               <img src={data.photoUrl} alt="" />
               <h3>{data.displayName}</h3>
            </span>
            <img className='header-logo' src="https://res.cloudinary.com/villalbad10/image/upload/v1661129359/titaMedia/Group_9_1_p2afnh.png" alt="TitaNet" />
            <span>
               <input className='salir' type="button" value="Salir" />
            </span>
         </section>
      </header>
   )
}

export default Header
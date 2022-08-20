import React from 'react'
import Boton from '../components/Boton';
import IniciaCon from '../components/IniciaCon';

const Iniciar = () => {

   return (
      <div className='container'>
         <img className='logo' src="https://res.cloudinary.com/villalbad10/image/upload/v1661000233/titaMedia/Group_9_1_lczed4.png" alt="titanet" />
         <img className='center' src="https://res.cloudinary.com/villalbad10/image/upload/v1661001228/titaMedia/object_hmtc9y.png" alt="" />
         <h1 className='login-text'>Iniciar sesión</h1>

         <form className='formLogin'>
            <input className='input-login' type="email" name="" required placeholder='Correo' /> <br />
            <input className='input-login' type="password" name="" required placeholder='Contraseña' />
            <div className='contLogin'> <Boton text={'Iniciar Sesión'} /></div>
            <IniciaCon img='https://res.cloudinary.com/villalbad10/image/upload/v1661009700/titaMedia/google_avbjfd.png' text='Goolge' />
            <IniciaCon img='https://res.cloudinary.com/villalbad10/image/upload/v1661009700/titaMedia/facebook_amuwqc.png' text='Facebook' />
         </form>
      </div>
   )
}

export default Iniciar
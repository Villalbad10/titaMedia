import React from 'react'
import { useDispatch } from 'react-redux';
import Boton from '../components/Boton';
import IniciaCon from '../components/IniciaCon';
import { loginFacebook } from '../firebase/loginFacebook';
import { loginGoogle } from '../firebase/loginGoogle';

const Iniciar = () => {
   const dispatch = useDispatch();
   return (
      <section className='container-login'>
         <div className='loginOpciones'>
            <img className='logo' src="https://res.cloudinary.com/villalbad10/image/upload/v1661000233/titaMedia/Group_9_1_lczed4.png" alt="titanet" />
            <img className='center logoLogin' src="https://res.cloudinary.com/villalbad10/image/upload/v1661001228/titaMedia/object_hmtc9y.png" alt="" />
            <h1 className='login-text'>Iniciar sesión</h1>

            <form className='formLogin'>
               <input className='input-login' type="email" name="" required placeholder='Correo' /> <br />
               <input className='input-login' type="password" name="" required placeholder='Contraseña' />
               <div className='contLogin'> <Boton text='Iniciar Sesión' type='submit' /></div>
            </form>
            <span onClick={() => dispatch(loginGoogle())}>
               <IniciaCon img='https://res.cloudinary.com/villalbad10/image/upload/v1661009700/titaMedia/google_avbjfd.png' text='Google' />
            </span>
            <span onClick={() => dispatch(loginFacebook())}>
               <IniciaCon img='https://res.cloudinary.com/villalbad10/image/upload/v1661009700/titaMedia/facebook_amuwqc.png' text='Facebook' />

            </span>
         </div>
         <div className='container-img'>
            <img className='center' src="https://res.cloudinary.com/villalbad10/image/upload/v1661013468/titaMedia/loginLogo_k6yfll.png" />
         </div>
      </section>
   )
}

export default Iniciar
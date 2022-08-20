import React from 'react'

const Boton = ({ text, type }) => {
   return (
      <input className='boton' type={type} value={text} />
   )
}

export default Boton
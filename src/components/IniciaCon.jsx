import React from 'react'

const IniciaCon = ({ img, text }) => {
   return (
      <button className='btnGF'>
         <img src={img} alt="" />
         Inicia con {text}
      </button>
   )
}

export default IniciaCon
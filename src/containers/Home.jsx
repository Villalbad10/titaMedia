import React, { useEffect, useState } from 'react'
import { filterTags } from '../filters/filterTags'
import { getCommet } from '../helpers/getComment'
import { getData } from '../helpers/getData'

const Home = () => {
   const [data, setData] = useState([])
   const [com, setCom] = useState([])

   useEffect(() => {
      getData('post').then(({ data }) => setData(data.data))
      console.log(data);
   }, [])

   const handleFiltro = (tag) => {
      getData('post').then(({ data }) => setData(filterTags(data.data, tag)))
   }

   const handleComent = (id) => {
      getCommet(id).then(({ data }) => data.data)
   }
   //getCommet(res.id).then(({ data }) => console.log(data.data))

   return (
      <div className='container home-container'>
         <span>Filtros:   </span>
         <button className='btn-filtro' onClick={() => getData('post').then(({ data }) => setData(data.data))}>Todo</button>
         <button className='btn-filtro' onClick={() => handleFiltro('animal')}>Animal</button>
         <button className='btn-filtro' onClick={() => handleFiltro('human')}>Human</button>
         <button className='btn-filtro' onClick={() => handleFiltro('snow')}>Snow</button>
         {
            data.map((res, index) =>

               <section key={index} className='post'>
                  <div className='post-header'>
                     <span>
                        <img className='img-header' src={res.owner.picture} />
                        <h2>{res.owner.firstName} {res.owner.lastName}</h2>
                     </span>
                     <strong><img className='like' src='https://res.cloudinary.com/villalbad10/image/upload/v1661124337/titaMedia/like_jhjgsb.svg' />{res.likes}
                     </strong>
                  </div>
                  <hr />
                  <div className='post-contenido'>
                     <img className='img-post' src={res.image} />
                     <section>
                        {
                           res.tags.map((tag, index) =>
                              <span className='tag' key={index}>{tag} </span>
                           )
                        }
                        <p>{res.text}</p>
                     </section>
                  </div>
                  <span>{ }</span>

               </section>
            )
         }
      </div>
   )
}

export default Home
import React, { useEffect, useState } from 'react'
import { filterTags } from '../filters/filterTags'
import { getCommet } from '../helpers/getComment'
import { getData } from '../helpers/getData'
import axios from 'axios'

const Home = () => {
   const [data, setData] = useState([])
   const [id, setId] = useState('60d21b4667d0d8992e610c85')
   const idModal = data.filter(res => res.id == id)
   console.log(idModal);

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
                        <a href="#modal3" onClick={() => setId(res.id)}>{res.owner.firstName} {res.owner.lastName}</a>
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

                  {
                     // axios.get(`https://dummyapi.io/data/v1/post/${res.id}/comment?limit=10`, {
                     //    headers: { 'app-id': '62ffce8eca8e536cf46af069' }
                     // }).then(res => console.log(res.data.data))
                  }

               </section>
            )
         }
         {
            idModal.map((res, index) =>
               <div id="modal3" className="modalmask">
                  <div className="modalbox resize">
                     <a href="#close" title="Close" className="close">X</a>
                     <h2>{res.owner.firstName} {res.owner.lastName}</h2>
                     <h5><strong>Id: </strong>{res.owner.id}</h5>
                     <img src={res.owner.picture} alt="" />
                  </div>
               </div>
            )

         }
      </div>
   )
}

export default Home
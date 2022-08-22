import axios from 'axios'

export const getCommet = (id) => {
   const URL = `https://dummyapi.io/data/v1/post/${id}/comment?limit=10`;

   const res = axios.get(URL, {
      headers: { 'app-id': '62ffce8eca8e536cf46af069' }
   })

   return res;
}
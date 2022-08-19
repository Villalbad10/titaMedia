import axios from "axios";

export const getData = (endPoint) => {
   const URL = `https://dummyapi.io/data/v1/${endPoint}?limit=2`;

   const res = axios.get(URL, {
      headers: {
         'app-id': '62ffce8eca8e536cf46af069'
      }
   })

   return res

}
import { getAuth, signInWithPopup } from "firebase/auth"
import { facebook } from "./firebaseConfig";

export const loginFacebook = () => {
   return () => {
      const auth = getAuth();
      signInWithPopup(auth, facebook)
         .then()
         .catch(err => console.log(err))
   }
}
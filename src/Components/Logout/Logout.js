

import { useContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Logout = () => {
    const [error, setError] = useState(false);

    const { dispatch } = useContext(AuthContext)

    const navigate = useNavigate()
    
    signOut(auth).then(() => {
        // Sign-out successful.
       
         dispatch({type:"LOGOUT", payload:null})
        navigate("/login")
      }).catch((error) => {
        // An error happened.
        setError(true)
      });
    
  return (
      <>
      
      
      </>
  )
}

export default Logout
import React, { useState } from 'react'; 
import {Route,Routes, Navigate } from 'react-router-dom';
import { useSelector} from "react-redux";


export function ProtectedRoute({ children,}) {
    const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
    const { token } = useSelector((rootReducer) => rootReducer.userReducer);
    // console.log(currentUser)
    // const [user,setUser]=useState(false);
    // if (token !=null && currentUser.admin == true ){
    //   setUser(true)
    // }

  return token !=null && currentUser.admin == true ? children : <Navigate to="/"/>
        
      
      

}

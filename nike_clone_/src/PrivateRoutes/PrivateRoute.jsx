import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const auth = useSelector((store)=> store.AuthReducer.isAuth)
    console.log(auth)
    const location = useLocation();
    
    
 if(!auth)  {
    return <Navigate to='/login' replace state={{from : location}} />
 }
 return children;
}

export default PrivateRoute
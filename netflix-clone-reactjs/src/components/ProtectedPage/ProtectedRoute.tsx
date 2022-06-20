import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
// @ts-ignore
import { User } from '../AuthContext/AuthContext.tsx';

const ProtectedRoute = ({children}) => {
const {user}=User();
    
  if(!user){
    return <Navigate to='/' />
  }else{
    return children;
  }
}

export default ProtectedRoute
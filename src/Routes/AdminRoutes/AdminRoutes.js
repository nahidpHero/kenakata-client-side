import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../provaider/AuthProvaider';

const AdminRoutes= ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin]=useAdmin(user?.email)
    const location=useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }


    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoutes;
import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

/*
1. only allow authenticated user to visit the route
2. 
3. redirect user to the rout they wanted to go
*/

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return     <Spinner animation="border" variant="primary" />
    }

    if(!user){
        return <Navigate to= "/login" state={{from: location}} replace></Navigate>
    }
    return children;   
};

export default PrivateRoute;
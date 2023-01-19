import axios from 'axios';
import { useContext,useEffect } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

function ProtectedRoutes(){

    const {value, setValue} = useContext(UserContext); 
    console.log(value);
    
    //Check if the session exists
    const isAuth = () => {
        axios.post(`http://localhost:3000/login`,{
            username: value.username,
            password: value.password
        })
        .then((response) => {
            console.log(response.data);
            if(response.data.success) return true;
            return false;
        })
        .catch(() => {
            return false;
        });
    }

    return isAuth() ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;
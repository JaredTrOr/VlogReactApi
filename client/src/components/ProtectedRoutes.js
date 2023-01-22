import { useContext } from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

function ProtectedRoutes(){
    const location = useLocation();
    const {value} = useContext(UserContext);
    
    const isAuth = () => {
        if(value) return true;
        return false;
    }

    return isAuth() ? 
        <Outlet/> : 
        <Navigate to='/login' replace state={{from: location}}/>
}

export default ProtectedRoutes;
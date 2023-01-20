import axios from 'axios';
import {Navigate, Outlet} from 'react-router-dom';

function ProtectedRoutes(){
    //Check if the session exists
    const isAuth = () => {
        const userCookie = document.cookie;
        console.log(userCookie);

        if(userCookie) return true;
        return false;
    }

    return isAuth() ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;
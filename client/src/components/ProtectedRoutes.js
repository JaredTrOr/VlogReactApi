import {Navigate, Outlet} from 'react-router-dom';

function ProtectedRoutes(){

    let isAuth = false;

    return isAuth ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;
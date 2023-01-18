import {Navigate, Outlet, useParams} from 'react-router-dom';

function ProtectedRoutes(){

    const {flag} = useParams();

    let isAuth = flag;

    return isAuth ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;
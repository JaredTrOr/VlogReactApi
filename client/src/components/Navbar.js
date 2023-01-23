import '../styles/Navbar.css';
import logo from '../images/logo192.png';
import userIcon from '../images/user-icon.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';

function Navbar(){

    const {value} = useContext(UserContext);

    return(
        <nav className="navbar">
            <div className="logo">
                <Link to='/home' className='nav-link'>
                    <img className='logo-img' src={logo} alt='logo imaga'/> 
                    <p>React vlog</p>
                </Link>
            </div>

            <div className="nav-items">
                <div className="edit-profile">
                    <Link to='/editProfile' className='nav-link edit-profile'>
                        <img className='logo-img' src={userIcon} alt='user image'/>
                        {value.name}
                    </Link>
                </div>
                <div className="signout">
                    <Link to='/login' className='nav-link signout'>Signout</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
import '../styles/Navbar.css';
import logo from '../images/logo192.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar(){

    const handleSignOut = () => {
        axios.get('')
    }

    return(
        <nav className="navbar">
            <div className="logo">
                <a href='' className='nav-link'>
                    <img className='logo-img' src={logo}/> 
                    <p>React vlog</p>
                </a>
            </div>

            <div className="nav-items">
                <div className="signout">
                    <Link to='/login' className='nav-link'>Signout</Link>
                </div>
                <div className="edit-profile"><a href="" className='nav-link'>Edit profile</a></div>
            </div>
        </nav>
    )
}

export default Navbar;
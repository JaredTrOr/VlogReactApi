import '../styles/Navbar.css';
import logo from '../images/logo192.png';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <a href='' className='nav-link'>
                    <img className='logo-img' src={logo}/> 
                    <p>React vlog</p>
                </a>
            </div>

            <div className="nav-items">
                <div className="signout"><a href="" className='nav-link'>Signout</a></div>
                <div className="edit-profile"><a href="" className='nav-link'>Edit profile</a></div>
            </div>
        </nav>
    )
}

export default Navbar;
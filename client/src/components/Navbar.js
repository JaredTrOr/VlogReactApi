import '../styles/Navbar.css';
import logo from '../images/logo192.png';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <a href=''>
                    <img className='logo-img' src={logo}/> 
                    <label>React vlog</label>
                </a>
            </div>

            <div className="nav-items">
                <div className="signout"><a href="">Signout</a></div>
                <div className="edit-profile"><a href="">Edit profile</a></div>
            </div>
        </nav>
    )
}

export default Navbar;
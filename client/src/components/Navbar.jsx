import '../styles/Navbar.css';
import logo from '../images/logo192.png';
import userIcon from '../images/user-icon.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../hooks/UserContext';

function Navbar(){

    const {value} = useContext(UserContext);
    const [burgerClass, setBurgerClass] = useState('nav-items hidden')

    const handleOnClickMenu = () => {

        if(burgerClass.includes('hidden')) {
            setBurgerClass('nav-items');
        }
        else {
            setBurgerClass('nav-items hidden');
        }

        console.log('click');
    }

    return(
        <nav className="navbar">
            <div className="logo">
                <Link to='/home' className='nav-link'>
                    <img className='logo-img' src={logo} alt='logo imaga'/> 
                    <p>React vlog</p>
                </Link>
            </div>

            <div className={burgerClass}>
                <div className="edit-profile">
                    <Link to='/editProfile' className='nav-link edit-profile'>
                        <img className='logo-img' src={userIcon} alt=''/>
                        {value.name}
                    </Link>
                </div>
                <div className="signout">
                    <Link to='/login' className='nav-link signout'>
                        <i class="fa-solid fa-arrow-right-from-bracket fa-2x"></i> <br/>
                        Signout
                    </Link>
                </div>
            </div>

            <div className="hamburger-menu" onClick={handleOnClickMenu}>
                <div className="line line-one"></div>
                <div className="line line-two"></div>
                <div className="line line-three"></div>
            </div>
        </nav>
    )
}

export default Navbar;
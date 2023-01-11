import '../styles/Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <a href=''>Logo</a>
            </div>

            <div className="nav-items">
                <div className="signout"><a href="">Signout</a></div>
                <div className="edit-profile"><a href="">Edit profile</a></div>
            </div>
        </nav>
    )
}

export default Navbar;
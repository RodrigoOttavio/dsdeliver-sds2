import './style.css';
import { ReactComponent as Logo } from './Logo.svg';

function Navbar () {
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">Ds Delivery </a>
        </nav>
    )
}

export default Navbar;
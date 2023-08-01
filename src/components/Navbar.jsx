import { Link } from 'react-router-dom'
import navImg from '../assets/home-icon.png';
import '../nav.css'
function Navbar() {
    return (
        <nav className='navbar-container'>
          <Link to="/">
          <img src={navImg} alt="Home" />

          </Link>
          </nav>

  )        
}


export default Navbar;

import './Nav.css'
import { Link } from 'react-router-dom';

export default function Nav() {
    return(
        <nav className="nav-bar">
            <Link className="nav-item" to='/about'>About</Link>
            <Link className="nav-item" to='/projects'>Projects</Link>
            {/* <Link className="nav-item" to='/contact'>Contact me</Link> */}
        </nav>
    )
}
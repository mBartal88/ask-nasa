import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className="Nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="gallery">Gallery</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;

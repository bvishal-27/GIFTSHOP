import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {
    const token = localStorage.getItem('token');
    
    return (
        <nav className="custom-nav">
            <Link to="/" className="nav-link">Home</Link>
            {!token ? (
                <>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Join</Link>
                </>
            ) : (
                <>
                    <Link to="/profile" className="nav-link">Profile</Link>
                    <Logout />
                </>
            )}
        </nav>
    );
};

export default Navbar;
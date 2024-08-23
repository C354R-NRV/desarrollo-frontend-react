import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const form = useSelector(state => state.form); 
    const isLoggedIn = useSelector(state => state.form.isLoggedIn);
    return (
        <nav className="navbar">
        <ul className="nav-list">
            <li className="nav-item">
            <Link to="/">Home</Link>
            </li> 
            <li className="nav-item">
            <Link to="/default">Default</Link>
            </li>  
            <li className="nav-item">
            <Link to="/products">Product</Link>
            </li>  
            {!isLoggedIn && (
            <li className="nav-item">
                <Link to="/login">Login</Link>
            </li>
            )}
        </ul>
        <div className="nav-right">
            <span>Bienvenido {form.formData.username}: {form.formData.email}</span>
        </div>
        </nav>
    );
};
export default Navbar;
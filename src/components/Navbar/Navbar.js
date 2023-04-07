import './Navbar.scss'
import logo from './logoNordic.png'
import { CartWidget } from '../CartWidget/CartWidget'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



export const Navbar = () => {


    return (
        <header className="header">
            <div className="header__container">
                <Link to='/'><img src={logo}  alt="logo" className='header__logo'/></Link>

                <nav className="navbar">
                    
                    <Link to="/" className="navbar__link">Inicio</Link>
                    <Link to="/servicios" className="navbar__link">Servicios</Link>
                        <NavDropdown  title="Tienda" id="basic-nav-dropdown" className='navbar__link'>
                            <p className='nav__prod'>Nordic ofrece</p>
                            
                            <NavDropdown.Item as={Link} to='/productos/interior' action variant="dark"> Interior </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/productos/exterior'>  Exterior </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/productos/maquinas'> Máquinas </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/productos/' action variant="dark"> Ver todo </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    <CartWidget />
                </nav>  
                
            </div>
        </header>
    )
}
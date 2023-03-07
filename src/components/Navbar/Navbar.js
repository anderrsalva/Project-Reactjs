import './Navbar.scss'
import logo from './logoNordic.png'
import { CartWidget } from '../CartWidget/CartWidget'
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo" className='header__logo'/>

                <nav className="navbar">
                    <a href="#" className="navbar__link">Inicio</a>
                    <a href="#" className="navbar__link">Servicios</a>
                    <a href="#" className="navbar__link">Presupuesto</a>
                    <NavDropdown title="Tienda" id="basic-nav-dropdown" className='navbar__link'>
                        <NavDropdown.Item href="#action/3.1"> Interior </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"> Exterior </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"> Productos </NavDropdown.Item>
                    </NavDropdown>
                    <CartWidget />
                </nav>  
            </div>
        </header>
    )
}
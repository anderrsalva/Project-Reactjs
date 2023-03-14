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
                    {/* <a href="#" className="navbar__link">Presupuesto</a> */}
                    <NavDropdown  title="Tienda" id="basic-nav-dropdown" className='navbar__link'>
                        <p className='nav__prod'>Nordic ofrece</p>
                        <NavDropdown.Item as={Link} to='/productos/interior' action variant="dark"> Interior </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/productos/exterior'>  Exterior </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/productos/maquinas'> Máquinas </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                        {/* <NavDropdown.Item href="#action/3.4"> 
                        Productos
                        </NavDropdown.Item> */}
                                
                            {/* <NavDropdown title= "Productos Nordic" id="basic-nav-dropdown"> */}
                                {/* <NavDropdown.Item href="#action/3.1"> Máquinas </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"> Cepillos y Pinceles </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Tratamientos y Selladores </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4"> Esponjas y guantes de lavado </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5"> Pinturas </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6"> Pastas de pulir </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7"> Shampoo</NavDropdown.Item> */}
                            
                    {/* </NavDropdown> */}
                    <CartWidget />
                </nav>  
            </div>
        </header>
    )
}
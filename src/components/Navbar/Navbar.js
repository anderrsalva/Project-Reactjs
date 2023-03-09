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
                    <NavDropdown title="Categorías" id="basic-nav-dropdown" className='navbar__link'>
                        <p className='nav__prod'>Tratamientos</p>
                        <NavDropdown.Item action variant="dark" href="#action/3.1"> Interior </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">  Exterior </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"> Listo para venta de auto </NavDropdown.Item>
                        <NavDropdown.Divider />
                        {/* <NavDropdown.Item href="#action/3.4"> 
                        Productos
                        </NavDropdown.Item> */}
                                <p className='nav__prod'>Productos</p>
                            {/* <NavDropdown title= "Productos Nordic" id="basic-nav-dropdown"> */}
                                <NavDropdown.Item href="#action/3.1"> Máquinas </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"> Cepillos y Pinceles </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Tratamientos y Selladores </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4"> Esponjas y guantes de lavado </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5"> Pinturas </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6"> Pastas de pulir </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7"> Shampoo</NavDropdown.Item>
                            </NavDropdown>
                    {/* </NavDropdown> */}
                    <CartWidget />
                </nav>  
            </div>
        </header>
    )
}
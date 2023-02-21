import './Navbar.scss'
import logo from './logoNordic.png'
import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo" className='header__logo'/>

                <nav className="navbar">
                    <a href="#" className="navbar__link">Inicio</a>
                    <a href="#" className="navbar__link">Servicios</a>
                    <a href="#" className="navbar__link">Presupuesto</a>
                    <CartWidget />
                </nav>
                
            </div>
        </header>
    )
}
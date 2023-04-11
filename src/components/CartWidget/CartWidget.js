import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import logoCarrito from './carritoCompras.png'

import './CartWidget.scss'

export const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className="header">
            <img src={logoCarrito} alt="logo" className='header__carrito'/>
            <span className='header__cantidad'>{totalCantidad()}</span>
        </Link>

    )
}



import { useContext } from 'react'
import './CartWidget.scss'
import logoCarrito from './carritoCompras.png'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)

    return (
        <div className="header">
            <img src={logoCarrito} alt="logo" className='header__carrito'/>
            <span className='header__cantidad'>{totalCantidad()}</span>
        </div>
    )
}



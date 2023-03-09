import './CartWidget.scss'
import logoCarrito from './carritoCompras.png'

export const CartWidget = () => {

    return (
        <div className="header">
            <img src={logoCarrito} alt="logo" className='header__carrito'/>
            <span className='header__cantidad'>0</span>
        </div>


    )
}



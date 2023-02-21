import './CartWidget.scss'

export const CartWidget = () => {

    return (
        <div className="header">
            <h1 className='header__carrito'>🛒</h1>
            <span className='header__cantidad'>0</span>
        </div>
    )
}
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import iconVacio from './vacio.png'

import './Cart.scss'

export const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className='container my-5 '>
                <div className='relleno-content'>
                <h2>No agregaste ningún producto</h2>
                <img src={iconVacio} alt="vacio" />
                <hr />
                </div>
                <div className='contenido-relleno'>
                    <p>Para finalizar la compra, agrega lo que estés buscando.</p>
                    <Link to="/productos/" className='btn btn-outline-danger'>Volver al catálogo</Link>
                </div>
            </div>

        )

    }

    return (
        <div className='container my-5'>
            <h4>COMPRA REALIZADA</h4>
            <hr />

            {
                cart.map((prod) => (
                    <div className='content'>
                        <div className='content-card' key={prod.id}>
                            <h4>{prod.name}</h4>
                            <img src={prod.img} alt={prod.name} />
                            <small>Precio por unidad: ${prod.price}</small>
                            <small> Cantidad: {prod.cantidad}</small>
                            <p>Precio Total: ${prod.price * prod.cantidad}</p>
                            <button
                                onClick={() => eliminarDelCarrito(prod.id)}
                                className='btn btn-outline-danger button-eliminar'
                            >
                                <BsFillTrashFill />
                            </button>
                            <hr />
                        </div>
                    </div>
                ))
            }

            <h3>TOTAL: ${totalCompra()}</h3>
            <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar carrito</button>
            <Link className='btn btn-outline-danger mx-2' to="/checkout"> Terminar mi compra</Link>

        </div>
    )
}

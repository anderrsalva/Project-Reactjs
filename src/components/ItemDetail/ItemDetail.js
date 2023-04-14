import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import volver from './volver.png'
import { useNavigate } from "react-router-dom";
import { LowStockMsg } from './LowStockMsg';

import './ItemDetail.scss'




export const ItemDetail = ({ item }) => {

  const { agregarAlCarrito, isInCart } = useContext(CartContext)

  const [cantidad, setCantidad] = useState(1);

  const navigate = useNavigate()

  const handlerVolver = () => {
    navigate(-1);
  }

  const handleAgregar = () => {
    const newItem = {
      ...item,
      cantidad
    }

    agregarAlCarrito(newItem)
  }

  if (item.stock === 0) {
    return (
      <div className='container my-5 text-center'>
        <h3>No hay stock de este producto</h3>
        <hr />
        <Link to="/productos/" className='btn btn-outline-danger'>Ir a comprar</Link>
      </div>
    )
  }

  return (
    <div className='container my-5'>
      <h3 className='text-center'>Detalle del producto</h3>
      <hr />
          <Card className="card__content mb-3">
            <Card.Img variant="top" src={item.img} style={{ height: '350px', width: '400px' }} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Los productos que se ofrecen pueden incluir desde cosméticos y limpiadores hasta piezas de rendimiento y personalización. El objetivo es brindar una experiencia de conducción más cómoda y agradable, al tiempo que se mejora la estética del vehículo.</Card.Text>
              <Card.Text>Precio: {item.price}</Card.Text>

              {item.stock <= 5 && <LowStockMsg stock={item.stock} />}

              {
                isInCart(item.id)
                  ? <Link to="/cart" className='btn btn-outline-danger'>Terminar mi compra</Link>
                  : <ItemCount
                    max={item.stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    handleAgregar={handleAgregar}
                  />
              }
              <button onClick={handlerVolver} className="btn boton-volver my-1"><img src={volver} alt="volver" /></button>
            </Card.Body>
          </Card>
        </div>
  )
}






import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'



export const ItemDetail = ({item}) => {

  const [cantidad, setCantidad] = useState(1);

   const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad
    }
    console.log(itemToCart)
  }

  return (
    <div className='container my-5'>
        <h3>Detalle del producto</h3>
        <hr/>

        <Card  style={{ width: '65rem', height:'28rem' }} className="card__content">
            <Card.Img variant="top" src={item.img} style={{height: '350px', width: '400px'}} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Los productos que se ofrecen pueden incluir desde cosméticos y limpiadores hasta piezas de rendimiento y personalización. El objetivo es brindar una experiencia de conducción más cómoda y agradable, al tiempo que se mejora la estética del vehículo.</Card.Text>
                <Card.Text>Precio: {item.price}</Card.Text>
                <ItemCount
                    max={item.stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    handleAgregar={handleAgregar}
                />
            </Card.Body>
        </Card>

      
    </div>
  )
}


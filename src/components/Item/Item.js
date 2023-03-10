import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const Item = ({item}) => {
  return (
    <Card key={item.id} style={{ width: '20rem' }}>
        <Card.Img variant="top" src={item.img} style={{height: '250px'}} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Precio: {item.price}</Card.Text>
            <Button variant="danger">Ver más</Button>
        </Card.Body>
    </Card>
  )
}



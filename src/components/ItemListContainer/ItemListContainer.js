import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { pedirDatos } from '../../helpers/pedirDatos';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    console.log(productos)

    
        useEffect(() => {

            pedirDatos(true)
                .then((response) => {
                    setProductos( response )
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    console.log("Fin del proceso")
                })
        }, [])


    
    return(
        <div className="contenedor">
            <h2>Servicios y Productos</h2>
            <hr/>

            {/* mostrar el array de productos*/}
            {/* <div className='row my-5'>
                {productos.map((el) => (
                <div className='col-3 m-1'>
                    <img src={el.img} alt={el.name}/>
                    <h4>{el.name}</h4>
                    <p>{el.description}</p>
                    <p>Precio: <strong>${el.price}</strong></p>
                    </div>)
                )}
            </div> */}

            <div className='card__prod'>
                {productos.map((el) => (       
                    <Card key={el.id} style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={el.img} style={{height: '250px'}} />
                        <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                            <Card.Text>{el.description}</Card.Text>
                            <Card.Text>Precio: {el.price}</Card.Text>
                            <Button variant="danger">Ver más</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}


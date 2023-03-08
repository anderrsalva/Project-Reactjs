import { useEffect, useState } from 'react'
import './ItemListContainer.scss'

const MOCK_DATA = [
    {
        id: 1,
        name: "Producto 1",
        description: "Lorem ipsum producto 1",
        price: "A presupuestar",
        // img: "assets/remeravol_negra.JPG",
        img: "/img/producto.jpeg"
    },
    {
        id: 2,
        name: "Producto 2",
        description: "Lorem ipsum producto 2",
        price: "A presupuestar",
        // img: "assets/remeravol_negra.JPG",
        img: "/img/producto2.jpeg"
    },
    {
        id: 3,
        name: "Producto 3",
        description: "Lorem ipsum producto 3",
        price: "A presupuestar",
        // img: "assets/remeravol_negra.JPG",
        img: "/img/producto.jpg"
    },
    {
        id: 4,
        name: "Producto 4",
        description: "Lorem ipsum producto 4",
        price: "A presupuestar",
        // img: "assets/remeravol_negra.JPG",
        img: "/img/producto.jpeg"
    },
    {
        id: 5,
        name: "Producto 5",
        description: "Lorem ipsum producto 5",
        price: "A presupuestar",
        img: "/img/producto.jpeg"
    },
    {
        id: 6,
        name: "Producto 6",
        description: "Lorem ipsum producto 6",
        price: "A presupuestar",
        img: "/img/producto.jpeg"
    }
]


    const pedirDatos = () => {
        return new Promise((resolve, reject) => {
            //cuerpo de la promesa
            setTimeout(() => {
                resolve(MOCK_DATA)
            }, 2000)
        })
    }

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

            {productos.map((el) => <div>
                <img src={el.img} alt={el.name}/>
                <h4>{el.name}</h4>
                <p>{el.description}</p>
                <p>Precio: <strong>${el.price}</strong></p>
                </div>)}
        </div>
    )
}


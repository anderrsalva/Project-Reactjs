import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';

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
            <ItemList items={productos}/>
        </div>
    )
}


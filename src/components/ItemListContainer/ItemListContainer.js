import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'





export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading , setLoading] = useState(true)
    
    const { categoryId } = useParams()
    console.log(categoryId) 

    
        useEffect(() => {

            setLoading(true)

            pedirDatos(true)
                .then((response) => {

                    if(!categoryId){
                        setProductos( response )
                    }else{
                        setProductos( response.filter((prod) => prod.category === categoryId))
                    }
                    
                })
                .catch((error) => {
                    console.log(error)
                })
                 .finally(() => {
                     setLoading(false)
                 })
        }, [categoryId])


    
    return(
        //Ver el estilo del spinner
        <div className='contenedor'>
            {
                loading
                ? <Spinner/>
                : <ItemList items={productos}/>
            }
        </div>
        
    )
}


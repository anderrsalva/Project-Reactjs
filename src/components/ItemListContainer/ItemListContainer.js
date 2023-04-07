import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/Config'






export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading , setLoading] = useState(true)
    
    const { categoryId } = useParams()
    console.log(categoryId) 

    
        useEffect(() => {

            setLoading(true)

            // 1- referencia (sync)

            const productosRef = collection(db, "productos")
            const q = categoryId 

                        ? query(productosRef, where("category", "==" , categoryId))
                        : productosRef
            
            // 2- pedir esa referencia (async)

            getDocs(q)
                .then((res) => {
                    const docs = res.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })

                    console.log(docs)

                    setProductos(docs)
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


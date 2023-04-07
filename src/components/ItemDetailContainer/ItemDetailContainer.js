import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import { db } from '../../firebase/Config'
import {doc, getDoc } from 'firebase/firestore'





export const ItemDetailContainer = () => {

const [item, setItem] = useState(null)
const [loading, setLoading] = useState(true)

const { itemId } = useParams()


useEffect(() => {
    setLoading(true)

    // 1- referencia

    const docRef = doc(db, "productos", itemId)


    // 2- llamado aync

    getDoc(docRef)
        .then((doc) => {
            console.log(doc.id)
            console.log(doc.data())
            setItem({
                id: doc.id,
                ...doc.data()
            })
        })
        .finally(() => {
            setLoading(false)
        })
    

}, [])

  return (
    <div>
        {
            loading
            ? <Spinner/>
            : <ItemDetail item={item}/>
          
        }

    </div>
  )
}



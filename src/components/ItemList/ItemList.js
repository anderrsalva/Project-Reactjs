import React from 'react'
import { Item } from '../Item/Item'

import './ItemList.scss'


export const ItemList = ({ items }) => {
  return (
    <div className='text-center my-5'>
      <h2>Productos</h2>
      <hr />
      {/* mostrar el array de productos*/}

      <div className='card__prod'>
        {items.map((producto) => <Item key={producto.id} item={producto} />)}
      </div>
    </div>
  )
}



import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { Navigate, Link } from 'react-router-dom'
import { db } from '../../firebase/Config'
import iconComprobado from './comprobado.png'

import './Checkout.scss'

export const Checkout = () => {

  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)
  const [values, setValues] = useState({
    nombre: '',
    direccion: '',
    celular: '',
    email: ''
  })


  const handleInputChange = (e) => {

    setValues({
      ...values,
      [e.target.name]: e.target.value
    })

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    //Validaciones

    if (values.nombre.length < 3) {
      alert("Nombre inválido")
      return
    }
    if (values.direccion.length < 3) {
      alert("Dirección inválido")
      return
    }
    if (values.celular.length < 3) {
      alert("Celular inválido")
      return
    }
    if (values.email.length < 5) {
      alert("Email inválido")
      return
    }


    const orden = {
      cliente: values,
      items: cart.map((prod) => ({ id: prod.id, price: prod.price, cantidad: prod.cantidad, name: prod.name })),
      total: totalCompra(),
      fecha: new Date()
    }


    console.log("Submit", orden)

    const ordersRef = collection(db, 'orders')


    addDoc(ordersRef, orden)
      .then((doc) => {
        setOrderId(doc.id)
        vaciarCarrito()
      })
  }

  if (orderId) {
    return (
      <div className="container text-center my-5 order-container" >
        <img className='my-3' src={iconComprobado} alt="check" />
        <h2>¡Recibimos tu compra con éxito!</h2>
        <hr />
        <p>Muchas gracias por confiar en nosotros, te esperamos en tu próxima compra...</p>
        <p>Guarda tu número de orden: <span className="checkout__orderId">#{orderId}</span></p>
        <Link className="btn btn-outline-dark my-3" to="/">Volver al inicio</Link>
      </div>
    )
  }


  if (cart.length === 0) {
    return <Navigate to="/" />
  }


  return (
    <div className='container my-5'>
      <h2>Finalizar compra </h2>
      <hr />

      <form className='container my-5' onSubmit={handleSubmit}>
        <input

          onChange={handleInputChange}
          value={values.nombre}
          type={'text'}
          placeholder='Nombre'
          className='form-control my-3'
          name="nombre"
        />

        <input

          onChange={handleInputChange}
          value={values.direccion}
          type={'text'}
          placeholder='Dirección'
          className='form-control my-3'
          name="direccion"
        />
        <input

          onChange={handleInputChange}
          value={values.celular}
          type={'number'}
          placeholder='Celular'
          className='form-control my-3'
          name="celular"
        />

        <input

          onChange={handleInputChange}
          value={values.email}
          type={'email'}
          placeholder='Email'
          className='form-control my-3'
          name="email"
        />

        <button className='btn btn-outline-dark my-2' type='submit'>Enviar</button>
      </form>

      <div class="contacto">
        <h2>Información de contacto</h2>
        <hr />
        <div>Ante alguna duda o consulta con tu compra, te dejamos nuestra fuente de contactos...</div>
        <br />
        <ul>
          <li><img src="/img/footer/whatsapp.svg" alt="Teléfono" /> Teléfono: +54 11 3848-3151</li>
          <li><img src="/img/footer/instagram.svg" alt="Instagram" /> Instagram: @nordic_esteticavehicular</li>
          <li><img src="/img/footer/geo-alt-fill.svg" alt="Ubicación" /> Dirección:  Av. Brig. Gral. Juan Manuel de Rosas 5293, Loma Hermosa, Provincia de Buenos Aires</li>
        </ul>
      </div>

    </div>
  )
}



import React from 'react'
import { useState, useContext} from 'react'
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { Navigate, Link } from 'react-router-dom'
import { db } from '../../firebase/Config'

export const Checkout = () => {

  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

  const [orderId, setOrderId] = useState (null)
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


  const handleSubmit = (e) =>{
    e.preventDefault()
    //Validaciones

    if(values.nombre.length < 3 ) {
      alert("Nombre inválido")
      return
    }
    if(values.direccion.length < 3) {
      alert("Dirección inválido")
      return
    }
    if(values.celular.length < 3 ) {
      alert("Celular inválido")
      return
    }
    if(values.email.length < 5) {
      alert("Email inválido")
      return
    }
  

    const orden = {
      cliente: values,
      items: cart.map((prod) => ({id: prod.id, price: prod.price, cantidad: prod.cantidad, name: prod.name})),
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
            <div className="container my-5">
                <h2>¡Tu orden se registró con éxito!</h2>
                <hr/>
                <p>Guarda tu número de orden: {orderId}</p>
                <Link className="btn btn-outline-dark my-3" to="/">Volver al inicio</Link>
            </div>
        )
    }


  if(cart.length === 0){
    return <Navigate to="/" />
  }


  return (
    <div className='container my-5'>
      <h2>Finalizar compra</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input

          onChange={handleInputChange}
          value={values.nombre}
          type={'text'}
          placeholder='Nombre'
          className='form-control my-2'
          name="nombre"
        />

        <input

          onChange={handleInputChange}
          value={values.direccion}
          type={'text'}
          placeholder='Dirección'
          className='form-control my-2'
          name="direccion"
        />
        <input
          
          onChange={handleInputChange}
          value={values.celular}
          type={'number'}
          placeholder='Celular'
          className='form-control my-2'
          name="celular"
        />

        <input

          onChange={handleInputChange}
          value={values.email}
          type={'email'}
          placeholder='Email'
          className='form-control my-2'
          name="email"
        />

        <button className='btn btn-outline-dark my-2' type='submit'>Enviar</button>
      </form>

    </div>
  )
  }



import React from 'react'
import { useState } from 'react'

export const Checkout = () => {


  const [values, setValues] = useState({
    nombre: '',
    direccion: '',
    email: ''
  })


  const handleInputChange = (e) => {
      console.log(e.target.value)

      setValues({
        ...values,
        [e.target.name]: e.target.value
      })

  }


  const handleSubmit = (e) =>{
    e.preventDefault()

    console.log("Submit", values)
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
          name='nombre'
        />

        <input

          onChange={handleInputChange}
          value={values.nombre.direccion}
          type={'text'}
          placeholder='Dirección'
          className='form-control my-2'
          name='direccion'
        />
        <input
          
          onChange={handleInputChange}
          value={values.celular}
          type={'number'}
          placeholder='Celular'
          className='form-control my-2'
          name='celular'
        />

        <input

          onChange={handleInputChange}
          value={values.email}
          type={'email'}
          placeholder='Email'
          className='form-control my-2'
          name='email'
        />

        <button className='btn btn-outline-dark my-2' type='submit'>Enviar</button>
      </form>

    </div>
  )
}



import React from 'react'

import './Servicios.scss'

export const Servicios = () => {
  return (
    <div className="services-container">
      <h3>Nuestros Servicios</h3>
      <p>Hemos logrado implementar un sistema de calidad interno que nos coloca en el mismo estándar que requieren nuestros clientes, habiendo normalizado todos y cada uno de nuestros procesos</p>
      <div className="cards-container">
        <div className="card">
          <img src="img/servicios/Tezza-1122.jpg" alt="producto" />
          <div className="card-body">
            <h5 className="card-title">Tratamiento interior</h5>
            <p className="card-text">Nuestro equipo de expertos utiliza los mejores productos y técnicas para dejar tu vehículo reluciente.</p>
          </div>
        </div>
        <div className="card">
          <img src="img/servicios/brillantado.jpg" alt="producto" />
          <div className="card-body">
            <h5 className="card-title">Preparación Pre Venta</h5>
            <p className="card-text">Nuestro equipo de expertos utiliza los mejores productos y técnicas para dejar tu vehículo reluciente.</p>
          </div>
        </div>
        <div className="card">
          <img src="img/servicios/Tezza-2136.jpg" alt="producto" />
          <div className="card-body">
            <h5 className="card-title">Limpieza de motor</h5>
            <p className="card-text">Nuestro equipo de expertos utiliza los mejores productos y técnicas para dejar tu vehículo reluciente. </p>
          </div>
        </div>
        <div className="card">
          <img src="img/servicios/Tezza-4274.jpg" alt="producto" />
          <div className="card-body">
            <h5 className="card-title">Tratamientos acrílicos</h5>
            <p className="card-text">Nuestro equipo de expertos utiliza los mejores productos y técnicas para dejar tu vehículo reluciente.</p>
          </div>
        </div>
        <div className="card">
          <img src="img/servicios/optica3.png" alt="producto" />
          <div className="card-body">
            <h5 className="card-title">Pintura</h5>
            <p className="card-text">Nuestro equipo de expertos utiliza los mejores productos y técnicas para dejar tu vehículo reluciente.</p>
          </div>
        </div>
        <div className="card">
          <img src="img/servicios/Tezza-2136.jpg" alt="producto" />
          <div className="card-body">
            <h5 className="card-title">Correción de laca</h5>
            <p className="card-text">Nuestro equipo de expertos utiliza los mejores productos y técnicas para dejar tu vehículo reluciente.</p>
          </div>
        </div>
      </div>
    </div>


  )
}



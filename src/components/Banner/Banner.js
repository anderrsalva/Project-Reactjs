import React from 'react'
import { Link } from 'react-router-dom'

import './Banner.scss'

export const Banner = () => {
  return (
    <div className="banner__portada">
      <div className="capa">
        <div className="contenido">
          <h1>ESTÉTICA VEHÍCULAR</h1>
          <hr/>
          <p>Trabajamos sobre el interior y exterior de tu vehículo, además ofrecemos productos de alta calidad para llevarlo a su mejor versión.</p>
          <a href='https://www.google.com/maps/place/Av.+Brig.+Gral.+Juan+Manuel+de+Rosas+5293,+Loma+Hermosa,+Provincia+de+Buenos+Aires/@-34.5561712,-58.5887593,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcba27863bbef5:0x48ae046c9d87c767!8m2!3d-34.5561756!4d-58.5865706!16s%2Fg%2F11s9k5y6y0' className="button">Ubicación<img className='img__button' src="/img/botones/icons8-mapa-16.png" alt='mapa'/></a>          <Link to='/productos/' className="button">Tienda<img className='img__button' src="/img/botones/icons8-carrito.png" alt='carrito'/></Link>
        </div>
      </div>
    </div>
  )
}



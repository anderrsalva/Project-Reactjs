import React from 'react'
import './Banner.scss'
// import banner from './portadaNordic.jpg'

export const Banner = () => {
  return (
    <div className="banner__portada">
         {/* <img src={banner} alt="banner"/> */}
            <div className="capa">
                    <div className="contenido">
                        <h1>ESTÉTICA VEHÍCULAR</h1>
                        <hr></hr>
                        <p>Trabajamos sobre el interior y exterior de tu vehículo, además ofrecemos productos de alta calidad para llevarlo a su mejor versión.</p>
                        <a href='#' className="button">Ubicación</a>
                        <a href='#' className="button">Contacto</a>
                    </div>
            </div>
    </div>
  )
}



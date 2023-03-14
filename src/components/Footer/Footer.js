import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <h3>Nordic</h3> 
            <p>Nordic es un taller de detallado automotriz.Trabajamos sobre todas las superficies del vehículo, para lograr la mayor y mejor corrección posible.</p>
            <ul className="socials">
                <li><a href="https://www.instagram.com/nordic_esteticavehicular/"><img src="/img/footer/instagram.svg"
                            alt="Instagram" /></a></li>
                <li><a href="https://www.google.com/maps/place/Av.+Brig.+Gral.+Juan+Manuel+de+Rosas+5293,+Loma+Hermosa,+Provincia+de+Buenos+Aires/@-34.5561712,-58.5887593,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcba27863bbef5:0x48ae046c9d87c767!8m2!3d-34.5561756!4d-58.5865706!16s%2Fg%2F11s9k5y6y0"><img src="/img/footer/geo-alt-fill.svg"
                            alt="Ubicación" /></a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=541156540265&text&type=phone_number&app_absent=0"
                        alt="Whatsapp"><img src="/img/footer/whatsapp.svg" /></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>CoderHouse @ Curso React Js Desarrollado por Anderson Salvatierra</p>
        </div>
    </footer>
  )
}


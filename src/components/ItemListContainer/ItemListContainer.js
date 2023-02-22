    import './ItemListContainer.scss'

export const ItemListContainer = ( { greeting } ) => {

    return (
        <div className="contenedor">
            <h1>ESTÉTICA VEHICULAR</h1>
            <h2> TRATAMIENTO DE CERÁMICO Y ACRÍLICO</h2>
            {greeting}
            <div>
            <a href="https://www.instagram.com/nordic_esteticavehicular/" class="btn btn-danger">Ver más</a>
            </div>
            <hr/>

            <h2> DESCONTAMINADO Y ABRILLANTADO DE PINTURA</h2>
            {greeting}
            <div>
            <a href="https://www.instagram.com/nordic_esteticavehicular/" class="btn btn-danger">Ver más</a>
            </div>
            <hr/>

            <h2> PREPARACIÓN PRE-VENTA</h2>
            {greeting}
            <div>
            <a href="https://www.instagram.com/nordic_esteticavehicular/" class="btn btn-danger">Ver más</a>
            </div>
            <hr/>

            <h2> LIMPIEZA DE MOTOR</h2>
            {greeting}
            <div>
            <a href="https://www.instagram.com/nordic_esteticavehicular/" class="btn btn-danger">Ver más</a>
            </div>
            <hr/>

            <h2> RESTAURACIÓN DE PLÁSTICOS</h2>
            {greeting}
            <div>
            <a href="https://www.instagram.com/nordic_esteticavehicular/" class="btn btn-danger">Ver más</a>
            </div>  

        </div>
    )
}
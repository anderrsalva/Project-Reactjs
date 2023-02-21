import './ItemListContainer.scss'

export const ItemListContainer = ( { greeting } ) => {

    return (
        <div className="contenedor">
            <h2> TRATAMIENTO DE CERÁMICO Y ACRÍLICO</h2>
            <hr />
            {greeting}

            <div>
            <a href="https://www.instagram.com/nordic_esteticavehicular/" class="btn btn-danger">Ver más</a>
            </div>

        </div>
    )
}
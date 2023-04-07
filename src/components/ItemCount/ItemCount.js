


export const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {
  
  const handleIncrement = () => {

    cantidad < max && setCantidad(cantidad + 1);

  };

  const handleDecrement = () => {

    cantidad > 1 && setCantidad(cantidad - 1);

  };


  return (
    <div>
      <button 
      onClick={handleDecrement} 
      className={cantidad === 1 ? "btn btn-outline-danger" : "btn btn-outline-dark"}
      disabled={cantidad === 1}
      >
        -
      </button>

      <span className="mx-2">{cantidad}</span>

      <button onClick={handleIncrement} 
      className={cantidad === max ? "btn btn-danger" : "btn btn-dark"}
      disabled={cantidad === max}
      >
        +
      </button>
      
      <br/>
      <button onClick={handleAgregar} className="btn btn-outline-danger my-2">Agregar al carrito</button>
      {/* Ver donde vuelve para atras, darle la ruta indicada */}
      {/* <button onClick={handlerVolver} className="btn boton-volver my-1"><img src={volver} alt="volver"/></button>  */}
    </div>
  );
}


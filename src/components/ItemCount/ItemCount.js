
import './ItemCount.scss'
import volver from './volver.png'
import { useNavigate } from "react-router-dom";




export const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {
  

  const navigate = useNavigate()


  const handlerVolver = () => {
    navigate(-1);
  }

  const handleIncrement = () => {

    cantidad < max && setCantidad(cantidad + 1);

  };

  const handleDecrement = () => {

    cantidad > 1 && setCantidad(cantidad - 1);

  };


  return (
    <div>
      <button onClick={handleDecrement} className="btn btn-outline-danger">-</button>
      <span className="mx-2">{cantidad}</span>
      <button onClick={handleIncrement} className="btn btn-outline-danger">+</button>
      <br/>
      <button onClick={handleAgregar} className="btn btn-outline-danger my-2">Agregar al carrito</button>
      {/* Ver donde vuelve para atras, darle la ruta indicada */}
      <button onClick={handlerVolver} className="btn boton-volver my-1"><img src={volver} alt="volver"/></button> 
    </div>
  );
}


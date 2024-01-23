import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  return (
    <div>
      <Link to="/cart">
        <img className="carrito" src="../img/Cart.png" alt="Carrito" />

      {
        cantidadTotal > 0 && <strong className="cantidad-cart"> {cantidadTotal} </strong>
      }

      </Link>
    </div>
  )
}

export default CartWidget
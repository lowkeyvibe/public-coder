import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import "./CartItem.css"

const CartItem = ({ item, cantidad, img }) => {
  const { eliminarProducto } = useContext(CarritoContext)
  return (
    <section>
      <div className="card-cart">
        <h4 className="item-name"> {item.name} </h4>
        <p className="item-price"> Price: ${item.price} </p>
        <p className="item-quantity"> Quantity: {cantidad} </p>

        <div className="item-image">
          <img className="imagenes-carrito" src={item.img} />
          <button className="eliminarProducto-cart" onClick={() => eliminarProducto(item.id)} > ❌ </button>
        </div>

      </div>
      <hr />
    </section>
  )
}

export default CartItem
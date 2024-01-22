import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import '../Cart/Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <div className="cart-message">
                <h2> No hay productos en el carrito.</h2>
                <h3> Vuelve al inicio!</h3>
            </div>
        )
    }

    return (

        <div>
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }

            <div className="resume-cart">
                <h4 className="total-quantity">Cantidad Total: {cantidadTotal}</h4>
                <h3 className="total-sum">Total: ${total} </h3>
                <button className="empty-cart" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                <Link className="end-buy" to={"/checkout"}> Finalizar Compra </Link>
            </div>
        </div>
    )
}

export default Cart
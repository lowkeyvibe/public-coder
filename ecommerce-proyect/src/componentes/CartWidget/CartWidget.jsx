import React from 'react'
import "../CartWidget/CartWidget.css"

const CartWidget = () => {
  const cartImg = "/img/cart.png"
  return (
    <div className="divCart">
      <img src={cartImg} alt="Carrito" />
      <strong>1</strong>
    </div>
  )
}

export default CartWidget
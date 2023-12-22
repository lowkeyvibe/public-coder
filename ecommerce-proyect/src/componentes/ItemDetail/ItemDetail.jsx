import { useState } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador';
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ id, name, stock, price, img }) => {
  // Creamos un estado local con la cantidad de productos agregados.
  const [addQuantity, setAddQuantity] = useState(0);

  // Creamos una funcion manejadora de la cantidad:
  const quantityHandler = (quantity) => {
    setAddQuantity(quantity);
    console.log("Productos agregados " + quantity);
  }

  return (
    <div className='contenedorItem'>
      <img src={img} alt={name} />

      <div className='info'>
        <h2>{name} </h2>
        <p className='price'>${price} USD</p>

        <div className='product-info'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni ratione qui eaque! Deserunt nesciunt voluptates quos! Temporibus, unde. Porro molestiae maiores deleniti eaque ad, omnis asperiores hic itaque eligendi.</p>
          <br />
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni ratione qui eaque! Deserunt nesciunt voluptates quos! Temporibus, unde. Porro molestiae maiores deleniti eaque ad, omnis asperiores hic itaque eligendi.</p>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni ratione qui eaque! Deserunt nesciunt voluptates quos! Temporibus, unde. Porro molestiae maiores deleniti eaque ad, omnis asperiores hic itaque eligendi.</p>



          {
            addQuantity > 0 ? (<li><Link to="/cart" >Terminar Compra</Link></li>) : (<Contador inicial={1} stock={stock} addFunction={quantityHandler} />)
          }


        </div>
        <p className='id-product'>Product ID : {id} </p>

      </div>



    </div>
  )
}

export default ItemDetail

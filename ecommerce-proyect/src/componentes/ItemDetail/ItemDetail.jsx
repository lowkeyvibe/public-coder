import { useState } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador';
import '../ItemDetail/ItemDetail.css';

// Importamos el CarritoContext
import { CarritoContext } from '../../Context/CarritoContext';
// Importamos el hook useContext
import { useContext } from 'react';

const ItemDetail = ({ id, name, stock, price, img }) => {
  // Creamos un estado local con la cantidad de productos agregados.
  const [addQuantity, setAddQuantity] = useState(0);

  // CAMBIOS EN LA CLASE 6 !!!
  const { agregarAlCarrito } = useContext(CarritoContext)

  // Creamos una funcion manejadora de la cantidad:
  const quantityHandler = (cantidad) => {
    setAddQuantity(cantidad);
    // console.log("Productos agregados " + quantity);

    // Ahora voy a crear un objeto con el item y la cantidad:
    const item = { id, name, price }
    agregarAlCarrito(item, cantidad)
  }

  return (
    <div className='test'>

      <div className='contenedorItem'>
        <img src={img} alt={name} />


        <div className='info'>
          <h2>{name}</h2>
          <hr />
          <hr />
          <div className='product-info'>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni ratione qui eaque! Deserunt nesciunt voluptates quos! Temporibus, unde. Porro molestiae maiores deleniti eaque ad, omnis asperiores hic itaque eligendi.</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni ratione qui eaque! Deserunt nesciunt voluptates quos! Temporibus, unde. Porro molestiae maiores deleniti eaque ad, omnis asperiores hic itaque eligendi.</p>
          </div>
          <p className='price'>${price} USD</p>

          {
            addQuantity > 0 ? (<li className='checkout'><Link to="/cart" ><a >Terminar Compra</a></Link></li>) : (<Contador inicial={1} stock={stock} addFunction={quantityHandler} />)
          }
        </div>
      </div>
    </div>


  )
}

export default ItemDetail

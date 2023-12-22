import { getOneProduct } from '../../../async-mock';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams(); // Tomo el ID por PARAMETRO

  useEffect(() => {
    getOneProduct(idItem)
      .then(res => setProduct(res)) // PRODUCTO = AL ID QUE RECIBIMOS POR PARAMETRO.
  }, [idItem]) // CADA VEZ QUE EL ID CAMBIA, SE REPITE EL PEDIDO 

  return (
    <div>
      <ItemDetail {...product} /> {/*RENDERIZA EL PRODUCTO QUE RECIBIMOS POR PARAMETRO */}
    </div>
  )
}

export default ItemDetailContainer
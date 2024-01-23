import { useState, useEffect } from 'react'
// import { getOneProduct } from '../../../async-mock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { dataBase } from '../Services/config';
import { getDoc, doc } from "firebase/firestore";



const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams(); // Tomo el ID por PARAMETRO

  useEffect(() => {
    const nuevoDoc = doc(dataBase, "inventario", idItem);
    getDoc(nuevoDoc)
    .then( res => {
      const data = res.data();
      const nuevoProducto = {id: res.id, ...data};
      setProduct(nuevoProducto)
    })
    .catch( error => console.warn("Se prohiben los findes", error))
  }, [idItem])


  // USANDO ASYNC-MOCK
  // useEffect(() => {
  //   getOneProduct(idItem)
  //     .then(res => setProduct(res)) // PRODUCTO = AL ID QUE RECIBIMOS POR PARAMETRO.
  // }, [idItem]) // CADA VEZ QUE EL ID CAMBIA, SE REPITE EL PEDIDO 

  return (
    <div>
      <ItemDetail {...product} /> {/*RENDERIZA EL PRODUCTO QUE RECIBIMOS POR PARAMETRO */}
    </div>
  )
}

export default ItemDetailContainer
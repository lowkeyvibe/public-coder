import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { dataBase } from '../Services/config';
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(dataBase, "inventario", idItem);
    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data };
        setProduct(nuevoProducto)
      })
      .catch(error => console.warn("Se prohiben los findes", error))
  }, [idItem])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
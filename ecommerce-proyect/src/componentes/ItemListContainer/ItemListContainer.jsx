import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { dataBase } from '../Services/config';
import { collection, getDocs, where, query } from "firebase/firestore"


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const misProductos = categoryName ? query(collection(dataBase, "inventario"), where("category", "==", categoryName)) : collection(dataBase, "inventario")

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data }
        })
        setProducts(nuevosProductos)
      })
      .catch(error => console.warn("Error!", error));

  }, [categoryName])

  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// ASYNC-MOCK
// import { getProducts, getProductsByCategory } from '../../../async-mock';

import ItemList from '../ItemList/ItemList';
import { dataBase } from '../Services/config';
import { collection, getDocs, where, query } from "firebase/firestore"


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

// - CODIGO CON EL CONFIG.JS
  useEffect(() => {
    const misProductos = categoryName ? query(collection(dataBase, "inventario"), where("category", "==", categoryName)) : collection(dataBase, "inventario") 

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return {id: doc.id, ... data}
        })
        setProducts(nuevosProductos)
      })
      .catch(error => console.warn("Error!", error));

  }, [categoryName])


// - CODIGO CON EL ASYNC-MOCK.JS -
  // useEffect(() => {
  //   const productsFunction = categoryName ? getProductsByCategory : getProducts
  //   productsFunction(categoryName)
  //     .then(res => setProducts(res))
  // }, [categoryName])

  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
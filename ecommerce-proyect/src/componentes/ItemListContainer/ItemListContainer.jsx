import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../../async-mock';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const productsFunction = categoryName ? getProductsByCategory : getProducts
    productsFunction(categoryName)
      .then(res => setProducts(res))
  }, [categoryName])

  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
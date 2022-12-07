import React from 'react'
import { useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const context = useContext(ProductContext);
  const {products} = context;
console.log(products)
  return (
    <div>
      this is home
      {products.map((product) => (
        <>
          <h1> <Link to={`/product/${product.id}`}> {product.title}</Link></h1>
        </>
      ))}
      
    </div>
  )
}

export default Home

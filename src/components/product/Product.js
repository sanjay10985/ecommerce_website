import React from 'react'
import "./Product.css"
import { useContext } from 'react'
import ProductContext from '../../context/ProductContext';
import ProductItem from './ProductItem';

const Product = () => {
    const context = useContext(ProductContext);
    const {products} = context;
  return (
    <div className='product__section'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Product

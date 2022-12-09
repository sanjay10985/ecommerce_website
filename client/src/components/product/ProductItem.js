import React from 'react'
import "./ProductItem.css"
import { Link } from 'react-router-dom'

const ProductItem = ({product}) => {
  return (
    <div className='productItem__div'>
      <div className="product__img">
        <Link to={`/product/${product.id}`}>
        <img src={product.imgUrl} alt="product-img" />
        </Link>
      </div>
      <div className="product_info__div">
        <h2 className='product__title'>{product.title}</h2>
        <div className="product_price__div">
        <h3 className='prodcut__price'>{product.price}</h3>
        <p className='product__mrp'>{product.mrp}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem

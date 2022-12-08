import React,{useContext} from 'react'
import ProductContext from "../../context/ProductContext";

const Cart = () => {
    const context = useContext(ProductContext);
    const {cartProducts} =context;
  return (
    <div className='cart__section'>
      {cartProducts.map((product) => (
        <>
            <h1>{product.title}</h1>
        </>
      ))}
    </div>
  )
}

export default Cart

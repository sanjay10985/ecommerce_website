import React,{useContext} from 'react'
import ProductContext from "../../context/ProductContext";

const Cart = () => {
    const context = useContext(ProductContext);
    const {cartProducts} =context;
  return (
    <div className='cart__section'>
      
    </div>
  )
}

export default Cart

import React from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const CartItem = ({ product }) => {
  const context = useContext(ProductContext);
  const {deleteCartProduct} = context;
  return (
    <div className="cartItem__div">
        <div className="cartproduct_img_title">
      <Link to={`/product/${product.id}`} className="cart_product__img">

        <img src={product.imgUrl} alt="" />
      </Link>
      <div className="cart_product__disc">
        <h3>{product.title}</h3>
      </div>
      </div>
      <div className="cartProduct_price_delete">
      <div className="cart_product__price">
        <h3 className="prodcut__price">{product.price}$</h3>
        <p className="product__mrp">{product.mrp}$</p>
      </div>
      <MdOutlineDeleteOutline onClick={() => deleteCartProduct(product.id)} className="cartProduct__delete" title="Delete"/>
      </div>
    </div>
  );
};

export default CartItem;

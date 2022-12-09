import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const context = useContext(ProductContext);
  const { cartProducts,setCartProducts } = context;
  const navigate = useNavigate();
  // console.log(cartProducts);
  const [price, setPrice] = useState(0);
  const [mrp, setMrp] = useState(0);

  useEffect(() => {
    var totalPrice = 0;
    var totalMrp = 0;
     // eslint-disable-next-line
    cartProducts.map(({ price, mrp }) => {
      totalPrice = totalPrice + parseInt(price);
      totalMrp = totalMrp + parseInt(mrp);
    });
    setPrice(totalPrice);
    setMrp(totalMrp);
  }, [cartProducts]);

  const Delivery = 1;
  const Discount = 5;
  const TotlaAmount = price - Delivery - price / 18 - price / 5;
  const handleClick = () =>{
    if(localStorage.getItem("token"))
    {
      alert("Your order is successful");
      navigate("/");
      setCartProducts([]);
    }
    else{
      alert("login or register first");
    }
  }
  return (
    <div className="cart__section">
      <div className="cartProducts__details">
        <h2 className="cart_heading">{cartProducts.length} Item in cart</h2>
        <hr />
        {cartProducts.length > 0 ? (
          <div className="cartItem__box">
            {cartProducts.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      {cartProducts.length > 0 ? (
      <div className="cartSection_right">
        <div className="cartProducts_billBox">
          <h3>Bill Amount</h3>
          <hr />
          <div className="productBill__div">
            <div className="productPrice__div">
              <span>MRP : </span>
              <span>{mrp}$</span>
            </div>
            <div className="productPrice__div">
              <span>Price : </span>
              <span>{price}$</span>
            </div>
            <div className="productPrice__div">
              <span>Discount(18%) : </span>
              <span style={{ color: "green" }}>{(price / 18).toFixed(1)}$</span>
            </div>
            <div className="productPrice__div">
              <span>Delivery Charges : </span>
              <span style={{ color: "red" }}>{Delivery}$</span>
            </div>
            <div className="productPrice__div">
              <span>Coupon Code: </span>
              <span style={{ color: "green" }}>{Discount}%</span>
            </div>
            <span className="total_amount_hr"></span>
            <div className="productPrice__div">
              <span>Total Amount : </span>
              <span>{TotlaAmount.toFixed(1)}$</span>
            </div>
          <h4 className="cartSaved_amount">Congratulations 🎉 You saved {(mrp-TotlaAmount).toFixed(1)}$ </h4>
          </div>
        </div>
        <div className="buyNow__div">
          <button className="buyNow__button" onClick={handleClick}>Buy Items</button>
        </div>
    </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;

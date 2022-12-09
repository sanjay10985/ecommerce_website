// import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const Navbar = () => {
  const context = useContext(ProductContext);
  const { cartProducts } = context;
  // console.log(cartProducts.legth);

  const LogOut = () => {
    localStorage.removeItem("token");
    alert("You are logged out of your account");
  };
  return (
    <div className="page_header__div">
      <div className="page_heading__div">
        <h2 className="page_heading">
          {" "}
          <Link to="/"> Ecom.</Link>
        </h2>
        <p>get latest shopping cart</p>
      </div>
      <div className="header_right">
        <div className="cartButton_icon">
          <Navitem icon={<AiOutlineShoppingCart />} path="/cart" title="Cart" />
          <div className="cartItem_number__div">
            <span className="cartItems_number">{cartProducts.length}</span>
          </div>
        </div>
        {localStorage.getItem("token") ? (
          <div className="navitem__div" title="LogOut">
            <AiOutlineLogout onClick={LogOut} title="LogOut" />
            <span style={{ color: "black" }}>LogOut</span>
          </div>
        ) : (
          <Navitem icon={<AiOutlineLogin />} title="Login" path="/login" />
        )}
      </div>
    </div>
  );
};

const Navitem = ({ icon, title, path }) => {
  // console.log(path);
  return (
    <Link to={path} className="navitem__div" title={title}>
      {icon}
      <span style={{color: "black"}}>{title}</span>
    </Link>
  );
};

export default Navbar;

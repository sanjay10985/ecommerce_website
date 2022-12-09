import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const Navbar = () => {
  const context = useContext(ProductContext);
  const { cartProducts } = context;
  // console.log(cartProducts.legth);
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
          <Navitem icon={<AiOutlineShoppingCart />} title="Cart" />
          <div className="cartItem_number__div">
            <span className="cartItems_number">{cartProducts.length}</span>
          </div>
        </div>
        <Navitem icon={<AiOutlineLogin />} title="Login" />
      </div>
    </div>
  );
};

const Navitem = ({ icon, title }) => {
  return (
    <Link to="/cart" className="navitem__div" title={title}>
      {icon}
    </Link>
  );
};

export default Navbar;

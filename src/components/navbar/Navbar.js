import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
        <Navitem icon={<AiOutlineShoppingCart />} title="Cart" />
        <Navitem icon={<AiOutlineLogin />} title="Login" />
      </div>
    </div>
  );
};

const Navitem = ({ icon, title }) => {
  return (
    <div className="navitem__div" title={title}>
      {icon}
    </div>
  );
};

export default Navbar;

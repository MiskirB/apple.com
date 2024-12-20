import React from "react";
import logo from "../../assets/images/icons/logo.png";
import searchicon from "../../assets/images/icons/search-icon.png";
import cart from "../../assets/images/icons/cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="internal-wrapper">
        <div className="header-links-wrapper">
          <ul>
            <li className="logo-link">
              <Link to="/">
                <img src={logo} />
              </Link>
            </li>
            <li>
              <Link to="/mac/">Mac</Link>
            </li>
            <li>
              <Link to="/iphone/">iphone</Link>
            </li>
            <li>
              <Link to="/ipad/">ipad</Link>
            </li>
            <li>
              <Link to="/watch/">watch</Link>
            </li>
            <li>
              <Link to="/tv/">tv</Link>
            </li>
            <li>
              <Link to="/music/">Music</Link>
            </li>
            <li>
              <Link to="/support/">Support</Link>
            </li>
            <li className="search-link">
              <Link to="/search/">
                <img src={searchicon} />
              </Link>
            </li>
            <li className="cart-link">
              <Link to="/cart/">
                <img src={cart} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

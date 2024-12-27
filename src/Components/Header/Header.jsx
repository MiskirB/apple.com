import React, { useState } from "react";
import logo from "../../assets/images/icons/logo.png";
import searchicon from "../../assets/images/icons/search-icon.png";
import cart from "../../assets/images/icons/cart.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="apple-navbar">
      <div className="nav-wrapper">
        {/* Apple Logo */}
        <div className="logo">
          <a href="/">
            <img className="logo-img" src={logo} alt="Apple Logo" />
          </a>
        </div>

        {/* Desktop Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/mac">Mac</a>
          </li>
          <li>
            <a href="/ipad">iPad</a>
          </li>
          <li>
            <a href="/iphone"> iPhone</a>
          </li>
          <li>
            <a href="/watch">Watch</a>
          </li>
          <li>
            <a href="/airpods">AirPods</a>
          </li>
          <li>
            <a href="/tvandhome">TV & Home</a>
          </li>
          <li>
            <a href="/entertainment">Entertainment</a>
          </li>
          <li>
            <a href="/accessories">Accessories</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/search">
              <img className="search-img" src={searchicon} alt="" />
            </a>
          </li>
          <li>
            <a href="/cart">
              <img className="cart-img" src={cart} alt="" />
            </a>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import logo from "../../assets/images/icons/logo.png";
// import searchicon from "../../assets/images/icons/search-icon.png";
// import cart from "../../assets/images/icons/cart.png";

// const Header = () => {
//   return (
//     <div>
//       <Navbar expand="lg" bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="/">
//             <img className="logo-link" src={logo} alt="apple" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto ">
//               <Nav.Link href="/store">Store</Nav.Link>
//               <Nav.Link href="/mac">Mac</Nav.Link>
//               <Nav.Link href="/iphone">iPhone</Nav.Link>
//               <Nav.Link href="/ipad">iPad</Nav.Link>
//               <Nav.Link href="/watch">Watch</Nav.Link>
//               <Nav.Link href="/vision">Vision</Nav.Link>
//               <Nav.Link href="/airpods">Airpods</Nav.Link>
//               <Nav.Link href="/tvandhome">Tv & Home</Nav.Link>
//               <Nav.Link href="/entertainment">Entertainment</Nav.Link>
//               <Nav.Link href="/accessories">Accessories</Nav.Link>
//               <Nav.Link href="/support">Support</Nav.Link>
//               <Nav.Link href="/search">
//                 <img className="logo-link" src={searchicon} alt="" />
//               </Nav.Link>
//               <Nav.Link href="/cart">
//                 <img className="logo-link" src={cart} alt="" />
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;

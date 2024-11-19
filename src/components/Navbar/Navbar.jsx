import React, { useState } from "react";
import "./Navbar.css";
import Lottie from "lottie-react";
import goToCart from "../../assets/icons/goToCart.json";
import Search from "../Search/Search";

function Navbar() {
  const [isHoveredgoToCart, setIsgoToCart] = useState(false);

  const handleMouseEntergoToCart = () => setIsgoToCart(true);
  const handleMouseLeavegoToCart = () => setIsgoToCart(false);

  return (
    <div>
      <nav className="nav">
        <h1 className="logo">Product Catalog</h1>
        <a className="home-btn opts" href="#">
          Home
        </a>
        <a className="top-deals opts" href="#">
          Top Deals
        </a>

        <Search />
        
        <a
          href="#"
          className="cart"
          onMouseEnter={handleMouseEntergoToCart}
          onMouseLeave={handleMouseLeavegoToCart}
        >
          <Lottie
            className="goToCart-anime icons"
            animationData={goToCart}
            autoplay={isHoveredgoToCart}
            loop={isHoveredgoToCart}
          />
        </a>
        <a className="sign-up opts" href="#">
          Sign Up
        </a>
        <a className="contact opts" href="#">
          Contact Us
        </a>
      </nav>
    </div>
  );
}

export default Navbar;

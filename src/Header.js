import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
// import { useStateValue } from "./StateProvider";

function Header() {
    // const [{basket}, dispatch] = useStateValue();
    return (
      <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className='header_logo'>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
          <span class="material-symbols-outlined header_logoImage" fontSize="large">
            storefront
          </span>
          <h2 className="header__logoTitle">AMZ</h2>
        </div>
      </Link>

      <div className='header_search'>
        <input type="text" className="header__searchInput" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <span class="material-symbols-outlined">
          search
        </span>
      </div>

      <div className='header_nav'>

        <div className="nav__item">
          <span className='nav__itemLineOne'>Hello Guest, </span>
          <span className='nav__itemLineTwo'>Sign In</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none"}}>
          <div className="nav__item">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <span class="material-symbols-outlined itemBasket">
              shopping_cart
            </span>
            <span className="nav__itemLineTwo">0</span>
          </div>
        </Link>

        

      </div>
    </div>
    )
}

export default Header;
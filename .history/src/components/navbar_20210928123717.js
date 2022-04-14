import React from 'react'
import './navbar.css'
import {animateScroll as scroll} from 'react-scroll';
const Navbar = () => {
    return (
      <header className="mobileNav">
    <div className="nav">
<ul className="options">
  <li onClick={(()=> scroll.scrollToTop())}>
  Top &uarr;</li>
  <li><a href="#">Shop</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">Contact</a></li>
  <li><a href="#">Reviews</a></li>
</ul>
    </div>
    </header>
    )
}

export default Navbar

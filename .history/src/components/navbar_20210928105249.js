import React from 'react'
import './navbar.css'
import {animateScroll as scroll} from 'react-scroll';
const Navbar = () => {
    return (
      <header className="mobileNav">
    <div className="nav">
<ul className="options">
  <li onClick={(()=> scroll.scrollToTop())}>
  Top &rarr;</li>
  <li><a href="default.asp">Shop</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">Reviews</a></li>
</ul>
    </div>
    </header>
    )
}

export default Navbar

import React from 'react';
import {Link} from 'react-scroll';
import './bar.css';
import order from './order.jpg';
import deal from './deal.jpg';
import location from './location.jpg';
import coupon from './coupon.jpg';
import gift from './gift.jpg';
import review from './review.jpg';
import subscription from './subscription.png';
import logo from './logo.jfif';

const Bar = () => {
    return (
        <div className="bar">
<ul>
  <li> <img src={subscription}></img> <Link to="order" smooth={true} duration={1000}>ORDER</Link></li>
  <li><img src={deal}></img> <Link to="deal" smooth={true} duration={1000}>DEAL</Link></li>
  <li><img src={location}></img> <Link to="location" smooth={true} duration={1000}>LOCATION</Link></li>
  <li><img src={gift}></img> <Link to="giftboxes" smooth={true} duration={1000}>GIFT BOXES</Link></li>
  <li><img src={coupon}></img> <Link to="coupons" smooth={true} duration={1000}>COUPONS</Link></li>
  <li><img src={logo}></img> <Link to="merchandise" smooth={true} duration={1000}>MERCHANDISE</Link></li>
  <li><img src={review}></img> <Link to="reviews" smooth={true} duration={1000}>REVIEWS</Link></li>
  <li><img src={subscription}></img> <Link to="subs" smooth={true} duration={1000}>SUBSCRIPTION</Link></li>
  
</ul>
        </div>
    )
}

export default Bar

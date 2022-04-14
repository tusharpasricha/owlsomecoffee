import React from 'react';
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
  <li> <img src={order}></img> <a href="default.asp">ORDER</a></li>
  <li><img src={deal}></img> <a href="news.asp">DEAL</a></li>
  <li><img src={location}></img> <a href="contact.asp">LOCATION</a></li>
  <li><img src={gift}></img> <a href="about.asp">GIFT BOXES</a></li>
  <li><img src={coupon}></img> <a href="about.asp">COUPONS</a></li>
  <li><img src={logo}></img> <a href="about.asp">MERCHANDISE</a></li>
  <li><img src={review}></img> <a href="about.asp">REVIEWS</a></li>
  <li><img src={subscription}</img> <a href="about.asp">SUBSCRIPTION</a></li>

</ul>
        </div>
    )
}

export default Bar

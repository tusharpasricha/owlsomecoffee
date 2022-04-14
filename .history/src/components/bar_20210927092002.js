import React from 'react';
import './bar.css';
import img from './order.jpg';
import img from './img/deal.jpg';

const Bar = () => {
    return (
        <div className="bar">
<ul>
  <li> <img src={img}></img> <a href="default.asp">ORDER</a></li>
  <li><img src={deal}></img> <a href="news.asp">DEAL</a></li>
  <li><img src="#"></img> <a href="contact.asp">LOCATION</a></li>
  <li><img src="#"></img> <a href="about.asp">GIFT BOXES</a></li>
  <li><img src="#"></img> <a href="about.asp">COUPONS</a></li>
  <li><img src="#"></img> <a href="about.asp">MERCHANDISE</a></li>
  <li><img src="#"></img> <a href="about.asp">REVIEWS</a></li>
  <li><img src="#"></img> <a href="about.asp">SUBSCRIPTION</a></li>

</ul>
        </div>
    )
}

export default Bar

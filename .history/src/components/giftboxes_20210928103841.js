import React from 'react';
import './giftboxes.css';
import giftbox from './giftbox.jpg';

const Giftboxes = () => {
    return (
        <div className="giftboxes" to="giftboxes">
        <section className="left">
        <h1>GIFTBOXES</h1>
        <p>Fresh Sleepy Owl, every month, at your doorstep. Never run out of coffee again. Skip, pause or cancel your subscription at anytime.</p>
        </section>
        <section className="right">
            <div className="imgbox">
            <img src={giftbox} className="gimg"></img>
            </div>
        </section>
        </div>
    )
}

export default Giftboxes

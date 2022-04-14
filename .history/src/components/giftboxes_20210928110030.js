import React from 'react';
import './giftboxes.css';
import giftbox from './giftbox.jpg';

const Giftboxes = () => {
    return (
        <div className="giftboxes" to="giftboxes">
        <section className="left">
        <h1>GIFTBOXES</h1>
        <p>Give your loved ones the gift of coffee! Pick any coffee, and we’ll ship it in a special gift box with a ceramic mug.</p>
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

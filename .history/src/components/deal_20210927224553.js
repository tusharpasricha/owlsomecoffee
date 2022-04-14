import React from "react";
import './deal.css';
import subscription from './subscription.png';

const Deal = () => {
    return (
        <>
        <div className="cardContainer">
            <div className="singleContainer">
                <div className="card" >
                    <div className="sneaker">
                        <img src={subscription} className="imga" alt="Socks" />
                    </div>
                    <div className="description">
                        <h2 className="title">
FILTER COFFEE</h2>
                        <h3 className="desc">Like to plan ahead? Make your cold brew days in advance—it stays fresh in the fridge for a week.</h3>
                    </div>
                </div>
            </div>
            <div className="singleContainer">
            <div className="card" >
                <div className="sneaker">
                    <img src={subscription} className="imga" alt="Socks" />
                </div>
                <div className="description">
                    <h2 className="title">HOT BREW COFFEE</h2>
                    <h3 className="desc">Brew bags specially created by baristas to make a great cup of coffee in just a few minutes.</h3>
                </div>
            </div>
        </div>
        <div className="singleContainer">
        <div className="card" >
            <div className="sneaker">
                <img src={subscription} className="imga" alt="Socks" />
            </div>
            <div className="description">
                <h2 className="title">COLD BREW BOTTLE</h2>
                <h3 className="desc">Made with our signature cold brew. This ready to drink iced coffee has a strong coffee flavour, with milk and (a little) sugar.</h3>
            </div>
        </div>
    </div>
    </div>
    </>
    );
}
 
export default Deal;
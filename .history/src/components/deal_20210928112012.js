import React from "react";
import './deal.css';
import coffee1 from './coffee1.jpeg';
import coffee2 from './coffee2.jfif';

const Deal = () => {
    return (
        <>
        <div className="cardContainer">
            <div className="singleContainer">
                <div className="card" >
                    <div className="sneaker">
                        <img className="coffeeimg" src={coffee1} className="imga" alt="Socks" />
                    </div>
                    <div className="description">
                        <h2 className="title">
FILTER COFFEE</h2>
                        <h3 className="desc">Like to plan ahead? Make your cold brew days in advance—it stays fresh in the fridge for a week. Made with our signature cold brew. This ready to drink iced coffee has a strong coffee flavour, with milk and (a little) sugar.</h3>
                    </div>
                </div>
            </div>
            <div className="singleContainer">
            <div className="card" >
                <div className="sneaker">
                    <img className="coffeeimg" src={coffee2} className="imga" alt="Socks" />
                </div>
                <div className="description">
                    <h2 className="title">HOT BREW COFFEE</h2>
                    <h3 className="desc">Brew bags specially created by baristas to make a great cup of coffee in just a few minutes.Like to plan ahead?</h3>
                </div>
            </div>
        </div>
        
    
    </div>
    </>
    );
}
 
export default Deal;
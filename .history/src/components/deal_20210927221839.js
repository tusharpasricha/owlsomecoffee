import React from "react";
import './deal.css';
import subscription from './subscription.png';

const Deal = () => {
    return (
        // <div className="cardContainer">
            <div className="singleContainer">
                <div className="card" >
                    <div className="sneaker">
                        <div className="circle"></div>
                        <img src={subscription} className="imga" alt="Socks" />
                    </div>
                    <div className="description">
                        <h2 className="title">TITLE</h2>
                        <h3 className="desc">DESCRIPTION lorem</h3>
                        <div className="size">
                            
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}
 
export default Deal;
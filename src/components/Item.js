import React from "react";
import '../styles/Item.css';
import Espresso from '../assets/espresso.jpg';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'

function Item() {
    return (

        <div className="main-container">
            <div className="item">
                <img src={Espresso} className="EspressoImg" alt="espresso" width="325" height="390" />
                <div className="img-overlay" />
                <button className="btn">
                    View More
                </button>

                <div className="details-wrapper">
                    <h4 className="details-title">Lorem ipsum</h4>
                    <p className="details-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="details-footer">
                        <span className="price">50$</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
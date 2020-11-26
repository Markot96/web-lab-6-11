import React from "react";
import '../styles/Home.css';
import SoftserveLogo from '../assets/SoftServe.png'
import IntelliasLogo from '../assets/Intellias-logo (1).png'
import EleksLogo from '../assets/ELEKS.png'
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'

function Home() {
    return (
        <div className="Home">
            <div className="CompanyTiles">

                <a href="/" className="CompanyTile">
                    <img src={EleksLogo} className="EleksLogo" alt="eleks" />
                </a>
                <a href="/" className="CompanyTile">
                    <img src={EleksLogo} className="EleksLogo" alt="eleks" />
                </a>
                <a href="/" className="CompanyTile">
                    <img src={EleksLogo} className="EleksLogo" alt="eleks" />
                </a>

            </div>
            <div className="ViewMoreBtnWrapper">
                <a href="/" className="ViewMoreBtn">View More</a>
            </div>
        </div>
    );
}

export default Home;
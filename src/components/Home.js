import React from "react";
import '../styles/Home.css';
import SoftserveLogo from '../assets/SoftServe.png'
import IntelliasLogo from '../assets/Intellias-logo (1).png'
import EleksLogo from '../assets/ELEKS.png'
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'

function Home() {
    return (
        <div className="Home">
            <div className="Heading">

            </div>
            <div className="CompanyTiles">

                <a href="/catalog" className="CompanyTile">
                    <img src={SoftserveLogo} className="SoftserveLogo" alt="softserve" />
                </a>
                <a href="/" className="CompanyTile1">
                    <img src={IntelliasLogo} className="IntelliasLogo" alt="intellias" />
                </a>
                <a href="/" className="CompanyTile">
                    <img src={EleksLogo} className="EleksLogo" alt="eleks" />
                </a>

            </div>
            <div className="ViewMoreBtnWrapper">
                <a href="/catalog" className="ViewMoreBtn">View More</a>
            </div>
        </div>
    );
}

export default Home;
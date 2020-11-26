import React from "react";
import '../styles/Catalog.css';
import SoftserveLogo from '../assets/SoftServe.png'

function Catalog() {
    return (
        <div className="Home">
            <div className="CompanyTiles">

                <a href="/" className="CompanyTile">
                    <img src={SoftserveLogo} className="SoftserveLogo" alt="softserve" />
                </a>
                <a href="/" className="CompanyTile">
                    <img src={SoftserveLogo} className="SoftserveLogo" alt="softserve" />
                </a>
                <a href="/" className="CompanyTile">
                    <img src={SoftserveLogo} className="SoftserveLogo" alt="softserve" />
                </a>
                
            </div>
            <div className="ViewMoreBtnWrapper">
                <a href="/" className="ViewMoreBtn">View More</a>
            </div>
        </div>
    );
}

export default Catalog;
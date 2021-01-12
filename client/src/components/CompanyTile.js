import React from "react";
import '../styles/CompanyTile.css';

const CompanyTile = ({ name }) => {
    return (
        <div className="main-container">
            <div className="CompanyTile">
                <img src={name} alt="" />
            </div>
        </div>
    );
}

export default CompanyTile;
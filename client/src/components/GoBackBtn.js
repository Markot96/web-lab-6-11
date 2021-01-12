import React from "react";
import '../styles/GoBackBtn.css';
import { Link } from 'react-router-dom'

function GoBackBtn() {

    return (
        <div className="GoBackBtn">
            <Link to={"/"}>Go Back</Link>
        </div>
    );

}

export default GoBackBtn;
import React from "react";
import '../styles/VacancyCard.css';
import { Link } from 'react-router-dom'


function VacancyCard(props) {
    const { info } = props;

    return (
        <div className="main-container">
            <div className="item">
                <img src={info.picture} alt="" width="325" height="390" />
                <div className="img-overlay" />
                <button className="btn" >
                    <Link to={"/catalog/" + info.id}>View More</Link>
                </button>

                <div className="details-wrapper">
                    <h4 className="details-title">{info.name}</h4>
                    <p className="details-info">{info.company}</p>
                    <div className="details-footer">
                        <span className="salary">{info.salary}$</span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default VacancyCard;
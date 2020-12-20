import React from "react";
import '../styles/VacancyCard.css';

function VacancyCard(props) {
    const { info } = props;

    return (
        <div className="main-container">
            <div className="item">
                <img src={info.picture}  className="EspressoImg" alt="image" width="325" height="390" />
                <div className="img-overlay" />
                <button className="btn">
                    View More
                </button>

                <div className="details-wrapper">
                    <h4 className="details-title">{info.name}</h4>
                    <p className="details-info">{info.description}</p>
                    <div className="details-footer">
                        <span className="salary">{info.salary}$</span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default VacancyCard;
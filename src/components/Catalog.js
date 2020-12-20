import React from "react";
import '../styles/Catalog.css';
import VacancyCard from "./VacancyCard";
import data from '../data/data.js'

function Catalog() {

    return (
        <div className="Home">
            <div className="CompanyTiles">

                {data.vacancies.map((item) => {
                    return (
                    <VacancyCard
                        key={item.id}
                        info={item} />

                    );
                })}

            </div>
        </div>
    );

}


export default Catalog;
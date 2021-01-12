import React, { useState, useEffect } from "react";
import { Slider } from "antd";
import 'antd/dist/antd.css';
import '../styles/Catalog.css';
import VacancyCard from "./VacancyCard";
import data from '../data/data.js'
import axios from "axios";
import Spinner from "./Spinner";

function Catalog() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [fetchData, setFetchData] = useState([]);
    useEffect(() => {
        try {
            setLoading(true)
            fetch('/api/vacancies')
                .then(response => response.json())
                .then(data => { setFetchData(data);
                    setLoading(false) })

        } catch (error) {
            setError(error.message)
            setLoading(false)
        }

        // const getData = async () => {
        //     const { data } = await axios.get('/api/vacancies');
        //     setFetchData(data);
        // }
        // getData();
        // console.log(fetchData)
    }, []
    )

    let dataLocal = data.vacancies;
    const [company, setCompany] = useState("");
    const [vacancy, findByVacancy] = useState("");
    const [salary, filterBySalary] = useState([100, 5000]);
    const marks = {
        100: {
            style: {
                color: '#fff',
                fontSize: 16,
            },
            label: '100$',
        },
        5000: {
            style: {
                color: '#fff',
                fontSize: 16,
            },
            label: '5000$',
        },
    }

    dataLocal = dataLocal.filter((object) => object.company.includes(company));
    dataLocal = dataLocal.filter((object) => object.name.toLowerCase().includes(vacancy));
    dataLocal = dataLocal.filter((object) => object.salary < salary[1] && object.salary > salary[0]);

    // if (!dataLocal) { return <Spinner /> }


    return (

        <div className="Catalog">
            <div className="FilterBar">

                <div className="CompanySelectorWrapper">
                    <h3>Select company</h3>
                    <select className="CompanySelector" onChange={(event) => setCompany(event.target.value)}>
                        <option></option>
                        <option value="SoftServe">SoftServe</option>
                        <option value="Eleks">Eleks</option>
                        <option value="Intellias">Intellias</option>
                    </select>
                </div>

                <div>
                    <input className="CompanySelector"
                        placeholder="Enter vacancy"
                        onChange={(event) => findByVacancy(event.target.value)}
                    ></input>
                </div>

                <Slider
                    range
                    step={50}
                    max={5000}
                    min={100}
                    defaultValue={[100, 5000]}
                    className="Slider"
                    onChange={filterBySalary}
                    marks={marks}
                />
            </div>
            <div className="CardTiles">
                {loading ? (
                    <Spinner />
                ) : error ? (
                    <div>error</div>
                ) : (
                            <div className="CardTiles">
                                {fetchData.map((item) => {
                                    return (
                                        <VacancyCard
                                            key={item.id}
                                            info={item} />
                                    );
                                })}
                            </div>

                        )}</div>


        </div >

    );

}

export default Catalog;
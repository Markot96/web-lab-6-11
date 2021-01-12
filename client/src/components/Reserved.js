import React from "react";
import '../styles/Reserved.css';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import ReservedBar from './ReservedBar.js'

function Reserved() {
    const select = useSelector((state) => state);
    console.log(select)
    return (
        <div className="Reserved">
            <div className="ReservedBarListWrapper">


                {select.orders.map((value) => {
                    return <ReservedBar value={value} />;
                })}

            </div>

            <div className="ReservedBtnWrapper">
            <div className="CountText">Total Price: {select.totalSalary} $</div>
                <div className="ContinueBtn">
                    <Link to={"/checkout"}>Send resumes</Link>
                </div>

            </div>
        </div>
    );
}

export default Reserved;
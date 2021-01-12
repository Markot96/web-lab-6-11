import React from "react";
import '../styles/ReservedBar.css';
import { useDispatch } from "react-redux";
import { deleteItem } from "../utils/Action.js";
import RedCross from "../assets/red_cross.png";

function ReservedBar({ value }) {
    const dispatch = useDispatch();

    const removeElement = () => {
        dispatch(deleteItem(value));
    };

    return (
        <div className="ReservedBarWrapper">
            <div className="ReservedBar">
                <div className="LeftReservedBar">
                    <p className="ItemDescription">{value.name}</p>

                    <p className="ItemDescription">{value.company}</p>

                    <p className="ItemDescription">{value.salary}$</p>
                </div>

                <img src={RedCross} className="ReduceItem" onClick={removeElement} alt="close" />


            </div>

        </div>
    );
}

export default ReservedBar;
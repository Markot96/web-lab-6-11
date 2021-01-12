import React from "react";
import '../styles/Item.css';
import data from '../data/data.js'
import { Link, useParams } from 'react-router-dom'
import GoBackBtn from './GoBackBtn.js'
import { useDispatch } from "react-redux";
import { createItem } from "../utils/Action.js";


function Item() {
    let dataLocal = data.vacancies;
    const p = useParams();
    const info = dataLocal.find(i => i.id === +p.id) || data.itemUndefined

    const dispatch = useDispatch();
    const goToCard = () => {
        dispatch(
          createItem({
            id: info.id,
            name: info.name,
            company: info.company,
            salary: info.salary,
          })
        );
      };
    

    return (

        <div className="main-container">

            <div className="ItemHeading">
                <img src={info.picture} alt="" width="325" height="390" />
                <div className="ItemHeadingDescriptionWrapper">
                    <div className="ItemHeadingDescription">
                        Position:
                        <p className="ItemHeadingDescriptionTitle">{info.name}</p>
                        Company:
                        <p className="ItemHeadingDescriptionTitle">{info.company}</p>
                        Requirements:
                        <p className="ItemHeadingDescriptionText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam nesciunt molestias libero animi maxime inventore
                            nihil, distinctio tempora pariatur ipsa minus?
                            Ipsum dolore nostrum impedit sunt maxime,
                            autem exercitationem voluptatibus!
                        </p>
                        Salary:
                        <p className="ItemHeadingDescriptionTitle">{info.salary}$</p>
                        <div className="ItemBtnWrapper">
                            <div className="AddToCartBtn" onClick={goToCard}>

                                <Link to={"/reserved"}>Reserve this</Link>
                            </div>
                            <GoBackBtn />
                        </div>


                    </div>
                </div>
            </div>

            <div className="ItemFooter">

            </div>

        </div>


    );

}

export default Item;
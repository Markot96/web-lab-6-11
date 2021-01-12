import React, { useState} from "react";
import '../styles/Home.css';
import CompanyTile from './CompanyTile.js'
import SoftServeLogo from '../assets/SoftServe1.png'
import IntelliasLogo from '../assets/Intellias-logo (1).png'
import EleksLogo from '../assets/ELEKS.png'
import EpamLogo from '../assets/epam.png'
import GloballogicLogo from '../assets/globallogic.png'
import DataartLogo from '../assets/dataart.png'
import Offices from '../assets/offices.jpg'



const data = [
    {
        id: 1,
        name: SoftServeLogo,
    },
    {
        id: 2,
        name: IntelliasLogo,
    },
    {
        id: 3,
        name: EleksLogo,
    },
    {
        id: 4,
        name: EpamLogo,
    },
    {
        id: 5,
        name: GloballogicLogo,
    },
    {
        id: 6,
        name: DataartLogo,
    },
];
function Home() {
    
    const [itemsToShow, setItemsToShow] = useState(data.slice(0, 3));
    const [isViewMore, setIsViewMore] = useState(false);

    const showMore = () => {
        setItemsToShow(data);
        setIsViewMore(true);
    };

    const showLess = () => {
        setItemsToShow(data.slice(0, 3));
        setIsViewMore(false);
    };


    return (
        <div className="Home">
            <div className="Heading">
                <img src={Offices} className="Offices" alt="offices" />
                <p className="HeadingDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam nesciunt molestias libero animi maxime inventore
                    nihil, distinctio tempora pariatur ipsa minus?
                    Ipsum dolore nostrum impedit sunt maxime,
                    autem exercitationem voluptatibus!
                </p>
            </div>

            <div className="ContentWrapper">

                <div className="CompanyTiles">

                    {itemsToShow.map(({ name }, idx) => (
                        <CompanyTile
                            name={name}
                            id={idx}
                        />
                    ))}

                </div>
                <div className="ViewMoreBtnWrapper">
                    {!isViewMore && (<button className="ViewMoreBtn" onClick={() => showMore()}>View more</button>)}
                    {isViewMore && (<button className="ViewMoreBtn" onClick={() => showLess()}>View less</button>)}
                </div>

            </div>
        </div>
    );
}

export default Home;
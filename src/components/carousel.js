import React from "react";
import "../styles/carousel-styles.css";
import img1 from "../images/IMG_1.jpg";
import img2 from "../images/IMG_2.jpg";
import img3 from "../images/IMG_3.jpg";
import img4 from "../images/IMG_4.jpg";


export default function Carousel() {
    constructor(props) {
        super(props);

        this.state = {
            source: 'IMG_1',
        };
    }

    return (
        <div className="column">
            <div id="mainImage">
                <img src={img1} id="chosenImage" />
            </div>
            <div id="thumbnailsContainer">
                <img src={img1} id="IMG_1" className="carouselThumbnail" onClick={handleClick}/>
                <img src={img2} id="IMG_2" className="carouselThumbnail" onClick={handleClick}/>
                <img src={img3} id="IMG_3" className="carouselThumbnail" onClick={handleClick}/>
                <img src={img4} id="IMG_4" className="carouselThumbnail" onClick={handleClick}/>
            </div>
        </div>
    );
}
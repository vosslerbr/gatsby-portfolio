import React, { Component } from "react";
import "../styles/carousel-styles.css";
import img1 from "../images/IMG_1.jpg";
import img2 from "../images/IMG_2.jpg";
import img3 from "../images/IMG_3.jpg";
import img4 from "../images/IMG_4.jpg";


export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            source: img1,
        };
    }

    render() {
        return (
            <div className="column">
                <div id="mainImage">
                    <img src={this.state.source} id="chosenImage" />
                </div>
                <div id="thumbnailsContainer">
                    <img src={img1} id="IMG_1" className="carouselThumbnail" onClick={() => this.setState({source: img1})}/>
                    <img src={img2} id="IMG_2" className="carouselThumbnail" onClick={() => this.setState({source: img2})}/>
                    <img src={img3} id="IMG_3" className="carouselThumbnail" onClick={() => this.setState({source: img3})}/>
                    <img src={img4} id="IMG_4" className="carouselThumbnail" onClick={() => this.setState({source: img4})}/>
                </div>
            </div>
        );
    }
}
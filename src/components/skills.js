import React from "react";
import "../styles/skills-styles.css";
import cssIcon from "../images/css-icon.png";
import htmlIcon from "../images/html-icon.png";
import jsIcon from "../images/js-icon.png";
import gitIcon from "../images/git-icon.png";
import xdIcon from "../images/xd-icon.png";
import indesignIcon from "../images/indesign-icon.png";
import sassIcon from "../images/sass-icon.png";

export default function Skills() {
    return (
        <div>
            <h2>My Skills</h2>
            <div>
                <img src={htmlIcon} className="skillIconImage"/>
                <img src={cssIcon} className="skillIconImage"/>
                <img src={jsIcon} className="skillIconImage"/>
                <img src={sassIcon} className="skillIconImage"/>
                <img src={gitIcon} className="skillIconImage"/>
                <img src={xdIcon} className="skillIconImage"/>
                <img src={indesignIcon} className="skillIconImage"/>
            </div>
        </div>
    );
}
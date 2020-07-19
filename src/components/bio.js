import React from "react";
import "../styles/bio-styles.css";

export default function Bio() {
    return (
        <div className="column">
            <p className="firstParagraph bioParagraphs">Hey there! My name is Brady and I’m a front-end web developer. I live in Sartell, Minnesota with my wife, Sydney and our cat, Scotty.</p>
            <p  className="bioParagraphs">I graduated in 2018 with a certificate in web design. Since then I've been learning more about front-end development and creating some projects along the way.</p>
            <p  className="bioParagraphs">My development toolbox includes technologies such as HTML, CSS (SCSS), JavaScript, and Git/Github. I use Adobe Illustrator, Photoshop, and InDesign in my current work as a marketing assistant.</p>
            <p  className="bioParagraphs">Recently I began learning React, Express, and Node.js to extend my knowledge into the MERN stack.</p>
        </div>
    )
  }
import React from "react";
import "../styles/footer-styles.css";
import myLogoWhite from "../images/my-logo-white.svg";

export default function Footer() {
    return (
        <footer>
            <img src={myLogoWhite} id="footerLogo"/>
            <p>&copy; 2020 Brady Vossler</p>
            <p>Made with <span role="img">❤️</span> using <a href="http://www.gatsbyjs.org">Gatsby</a></p>
        </footer>
    );
}
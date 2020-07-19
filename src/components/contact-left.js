import React from "react";
import SocialIcons from "../components/social-icons";
import "../styles/contact-left-styles.css";

export default function ContactLeft() {
    return (
        <div className="column">
            <h2 className="contactLeftHeading">Got something to say? Just need a friend in these trying times?</h2>
            <p>Fill out this form and I’ll be in touch!</p>
            <p>You can also reach me directly by email at <a href="mailto:bradyvosslerwebdev@gmail.com" className="link">bradyvosslerwebdev@gmail.com</a></p>
            <p>Find me online:</p>
            <SocialIcons />
        </div>
    )
  }
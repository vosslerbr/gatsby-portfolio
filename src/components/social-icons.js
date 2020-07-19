import React from "react";
import githubLogo from "../images/github-logo.png";
import instagramLogo from "../images/instagram-logo.png";
import linkedinLogo from "../images/linkedin-logo.png";

export default function SocialIcons() {
    return (
        <div className="socialLinks">
            <a href="https://github.com/vosslerbr" target="_blank">
                <img src={githubLogo} alt="GitHub logo" className="socialMediaLinkLogo"/>
            </a>
            <a href="https://www.instagram.com/vossler_br/?hl=en" target="_blank">
                <img src={instagramLogo} alt="Instagram logo" className="socialMediaLinkLogo"/>
            </a>
            <a href="https://www.linkedin.com/in/brady-j-vossler" target="_blank">
                <img src={linkedinLogo} className="socialMediaLinkLogo"/>
            </a>
        </div>
    )
  }



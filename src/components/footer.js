import React from "react"
import "../styles/footer-styles.css"
import Logo from "../images/b-logo.svg"

export default function Footer() {
  return (
    <footer>
      <img src={Logo} id="footerLogo" alt="logo" />
      <p>
        &copy; 2020 Brady Vossler | Made with{" "}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>{" "}
        using{" "}
        <a href="http://www.gatsbyjs.org" className="link">
          Gatsby
        </a>
      </p>
    </footer>
  )
}

import React from "react"
import Nav from "../components/nav"
import PageWrapper from "../components/pagewrapper"
import Footer from "../components/footer"
import githubLogo from "../images/github-logo.png"
import instagramLogo from "../images/instagram-logo.png"
import linkedinLogo from "../images/linkedin-logo.png"
import "../styles/index-styles.css"

export default function Index() {
  return (
    <div className="body">
      <Nav />
      <PageWrapper>
        <div className="indexContent">
          <h1 className="indexHeading">Hi, I'm Brady</h1>
          <p className="indexSubheading">I'm a front-end web developer</p>
          <div className="socialIcons">
            <a
              href="https://github.com/vosslerbr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="GitHub logo"
                className="socialMediaLogo"
              />
            </a>
            <a
              href="https://www.instagram.com/vossler_br/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramLogo}
                alt="Instagram logo"
                className="socialMediaLogo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/brady-j-vossler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} className="socialMediaLogo" />
            </a>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  )
}

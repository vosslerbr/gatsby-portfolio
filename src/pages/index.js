import React from "react"
import Nav from "../components/nav"
import PageWrapper from "../components/pagewrapper"

import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const PageStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentStyles = styled.div`
  text-align: center;
  margin-top: -72px;
`

const H1Styles = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin: 1rem;
  line-height: 0.8;
  text-transform: uppercase;
`

const H2Styles = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 1rem;
  line-height: 2.25rem;
  text-transform: uppercase;
`

const IconContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    color: var(--white);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem;
    transition: 0.2s;
  }

  svg:hover {
    fill: var(--orange);
  }
`

export default function Index() {
  return (
    <PageStyles>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brady Vossler's Portfolio | Home</title>
      </Helmet>
      <Nav />
      <PageWrapper>
        <ContentStyles>
          <H1Styles>Hi, I'm Brady</H1Styles>
          <H2Styles>I'm a web developer</H2Styles>
          <IconContainerStyles>
            <a
              href="https://github.com/vosslerbr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.instagram.com/vossler_br/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/brady-j-vossler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin />
            </a>
          </IconContainerStyles>
        </ContentStyles>
      </PageWrapper>
    </PageStyles>
  )
}

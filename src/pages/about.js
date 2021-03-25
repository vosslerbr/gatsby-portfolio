import React from "react"
import Nav from "../components/nav"
import PageWrapper from "../components/pagewrapper"
import Title from "../components/title"
import Bio from "../components/bio"
import Carousel from "../components/carousel"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function About() {
  return (
    <PageStyles>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brady Vossler's Portfolio | About</title>
      </Helmet>
      <Nav />
      <PageWrapper>
        <Title name="About" />
        <Carousel />
        <p style={{ marginBottom: `3rem`, fontSize: `0.75rem` }}>
          Swipe or scroll for more!{" "}
          <span role="img" aria-label="right facing arrow">
            ➡️
          </span>
        </p>
        <Bio />
      </PageWrapper>
      <Footer />
    </PageStyles>
  )
}

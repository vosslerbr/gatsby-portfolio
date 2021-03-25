import React from "react"

import Nav from "../components/nav"
import PageWrapper from "../components/pagewrapper"
import Title from "../components/title"
import ProjectCard from "../components/project-card"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProjectContainerStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(12, 1fr);
`

export default function Projects() {
  return (
    <PageStyles>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brady Vossler's Portfolio | Projects</title>
      </Helmet>
      <Nav />
      <PageWrapper>
        <Title name="Projects" />
        <ProjectContainerStyles>
          <ProjectCard
            source="todo-thumbnail"
            title="Inventory Tracker"
            skills={["React", "Express", "Node", "MongoDB"]}
            to="/inventory-tracker"
          />

          <ProjectCard
            source="weather-thumbnail"
            title="Weather Boy"
            skills={["Node", "Discord.js", "DarkSky API", "MapBox API"]}
            to="/weather-boy"
          />
          <ProjectCard
            source="hilo-thumbnail"
            title="Hi-Lo Game"
            skills={["HTML", "CSS", "JavaScript"]}
            to="/hilo"
          />
        </ProjectContainerStyles>
      </PageWrapper>
      <Footer />
    </PageStyles>
  )
}

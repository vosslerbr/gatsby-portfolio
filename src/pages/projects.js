import React from "react"
import Nav from "../components/nav"
import PageWrapper from "../components/pagewrapper"
import Title from "../components/title"
import ProjectCard from "../components/project-card"
import Footer from "../components/footer"

export default function Projects() {
  return (
    <div>
      <Nav />
      <PageWrapper>
        <Title name="Projects" />
        <div
          style={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
          }}
        >
          <ProjectCard
            source="todo-thumbnail"
            title="Inventory Tracker"
            desc="A simple CRUD app built with the MERN stack, meant for listing band instrument part inventory."
            githubLink="https://github.com/vosslerbr/inventory-tracker"
            demoLink="https://inventory-tracker.netlify.app/"
          />
          <ProjectCard
            source="weather-thumbnail"
            title="Weather App"
            desc="This web app fetches weather data for the user’s location. The app uses the APIs from DarkSky and MapBox."
            githubLink="https://github.com/vosslerbr/weather-app"
            demoLink="https://vosslerbr.github.io/weather-app"
          />
          <ProjectCard
            source="hilo-thumbnail"
            title="Hi-Lo Game"
            desc="A vanilla JS number-guessing game. Users can enter guesses and the game will help guide them to the answer."
            githubLink="https://github.com/vosslerbr/hilogame"
            demoLink="https://vosslerbr.github.io/hilogame"
          />
          {/* <ProjectCard
            source="todo-thumbnail"
            title="To-Do App"
            desc="A simple front-end only to-do app. Users can create new items, check items as done, delete items, and undo."
            githubLink="https://github.com/vosslerbr/todoapp"
            demoLink="https://vosslerbr.github.io/todoapp"
          /> */}
        </div>
      </PageWrapper>
      <Footer />
    </div>
  )
}

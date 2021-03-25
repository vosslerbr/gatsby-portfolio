import React from "react"
import styled from "styled-components"
import PageWrapper from "../components/pagewrapper"
import Nav from "../components/nav"
import Title from "../components/title"
import Button from "../components/button"
import InventoryTrackerList from "../images/inventory-tracker-list.png"
import InventoryTrackerSearch from "../images/inventory-tracker-search.png"
import InventoryTrackerCreate from "../images/inventory-tracker-create.png"
import Footer from "../components/footer"

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SubTitleStyles = styled.p`
  margin: -0.5rem 0 2rem 0;
  opacity: 0.5;
  letter-spacing: 0.25px;
  font-weight: 400;

  :first-of-type {
    margin: -2rem 0 1rem 0;
  }
`

const DescriptionStyles = styled.p`
  margin-top: 0;
  line-height: 150%;
  letter-spacing: 0.25px;
  font-weight: 400;

  :last-of-type {
    margin-bottom: 2rem;
  }
`

const ImageContainerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
`

const ImageStyles = styled.img`
  grid-column: span 12;
  width: 100%;
  border-radius: 5px;

  @media (max-width: 780px) {
    grid-column: span 12;
  }
`

export default function InventoryTracker() {
  return (
    <PageStyles>
      <PageWrapper>
        <Nav />
        <Title name="Inventory Tracker" />
        <SubTitleStyles>React | Express | Node | MongoDB</SubTitleStyles>
        <SubTitleStyles>Work in progress</SubTitleStyles>
        <Button
          to="https://inventory-tracker.netlify.app/"
          name="Demo"
        ></Button>
        <Button
          to="https://github.com/vosslerbr/inventory-tracker"
          name="GitHub Repo"
        ></Button>
        <DescriptionStyles>
          This full-stack web app is a simple CRUD app that allows users to add,
          edit, delete, and view band instrument parts currently in inventory.
        </DescriptionStyles>
        <DescriptionStyles>
          The app uses React and Axios on the front-end, with Express and
          MongoDB on the back-end. Parts will be shown in red when the number in
          inventory is below a threshold set by the user when adding the part.
          This allows for a visual overview of what parts may need to be ordered
          soon. I also implemented a simple search feature to allow users to
          find a certain part easier.
        </DescriptionStyles>
        <DescriptionStyles>
          Future plans include a UI overhaul, a loading indicator (right now you
          just have to wait for items to load from database), and the
          implementation of a filtering system and search autocomplete.
        </DescriptionStyles>
        <ImageContainerStyles>
          <ImageStyles
            src={InventoryTrackerList}
            alt="inventory tracker list thumbnail"
          />
          <ImageStyles
            src={InventoryTrackerSearch}
            alt="inventory tracker search thumbnail"
          />
          <ImageStyles
            src={InventoryTrackerCreate}
            alt="inventory tracker create thumbnail"
          />
        </ImageContainerStyles>
      </PageWrapper>
      <Footer />
    </PageStyles>
  )
}

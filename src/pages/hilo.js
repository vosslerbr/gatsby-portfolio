import React from "react"
import styled from "styled-components"
import PageWrapper from "../components/pagewrapper"
import Nav from "../components/nav"
import Title from "../components/title"
import Button from "../components/button"
import HiLoWelcome from "../images/hilo-welcome.png"
import HiLoExample from "../images/hilo-example.png"

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
    margin: -2rem 0 2rem 0;
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

export default function HiLo() {
  return (
    <PageStyles>
      <PageWrapper>
        <Nav />
        <Title name="Hi-Lo Game" />
        <SubTitleStyles>HTML | CSS | JavaScript</SubTitleStyles>
        <Button to="https://vosslerbr.github.io/hilogame/" name="Demo"></Button>
        <Button
          to="https://github.com/vosslerbr/hilogame"
          name="GitHub Repo"
        ></Button>
        <DescriptionStyles>
          Hi-Lo is a number guessing game created with the intention of helping
          me cement my skills in Javascript logic.
        </DescriptionStyles>
        <DescriptionStyles>
          The player starts the game. This triggers a function that creates a
          random number from 1-1000, which is then stored in a global object.
        </DescriptionStyles>
        <DescriptionStyles>
          When the player submits their guess, a few things happen: First, the
          answer is checked to make sure it's a number. Then the number's
          distance from the answer is checked to help determine the icon the
          player will see in the output. Lastly the guess is compared to the
          answer to see if it's too high, low, or correct.
        </DescriptionStyles>
        <DescriptionStyles>
          Each guess is then displayed to the screen with a hint telling the
          relationship to the answer as well as an icon giving more feedback. If
          the user sees a fire icon, their last guess is within 10 of the
          answer. If they see a snowflake, their guess is further than 100 from
          the answer.
        </DescriptionStyles>

        <ImageContainerStyles>
          <ImageStyles src={HiLoWelcome} alt="hilo welcome thumbnail" />
          <ImageStyles src={HiLoExample} alt="hilo example thumbnail" />
        </ImageContainerStyles>
      </PageWrapper>
      <Footer />
    </PageStyles>
  )
}

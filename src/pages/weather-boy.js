import React from "react"
import styled from "styled-components"
import PageWrapper from "../components/pagewrapper"
import Nav from "../components/nav"
import Title from "../components/title"
import Button from "../components/button"
import WeatherBoy from "../images/weather-boy.png"
import WeatherBoy5Day from "../images/weather-boy-5day.png"
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

export default function HiLo() {
  return (
    <PageStyles>
      <PageWrapper>
        <Nav />
        <Title name="Weather Boy - A Discord Bot" />
        <SubTitleStyles>
          Node| Discord.js | DarkSky API | MapBox API
        </SubTitleStyles>
        <SubTitleStyles>Work in progress</SubTitleStyles>
        <Button
          to="https://vosslerbr.github.io/Weather-Boy/"
          name="Demo"
        ></Button>
        <Button
          to="https://github.com/vosslerbr/Weather-Boy"
          name="GitHub Repo"
        ></Button>
        <DescriptionStyles>
          Weather Boy is a Discord bot written in Node.js. At its core, Weather
          Boy is meant to be an easy way for Discord users to request simple,
          up-to-date information about the weather conditions in their area.
        </DescriptionStyles>
        <DescriptionStyles>
          Weather Boy uses MapBox's geocoding API for reverse geocoding
          (latitude and longitude from place name) and DarkSky's API for weather
          data.
        </DescriptionStyles>
        <DescriptionStyles>
          Future plans include:
          <ul>
            <li>
              Hourly forecast Icons to make the reponses a bit more
              user-friendly
            </li>
            <li>Alerts (like severe storms, blizzards, etc)</li>
            <li>
              Migrate to OpenWeatherMap API since DarkSky API will shut down
              eventually
            </li>
            <li>
              Upgrade API plans to paid plans if bot were to reach wide adoption
              (if call limits become an issue)
            </li>
          </ul>
        </DescriptionStyles>

        <ImageContainerStyles>
          <ImageStyles src={WeatherBoy} alt="weather boy website thumbnail" />
          <ImageStyles
            src={WeatherBoy5Day}
            alt="weather boy website 5 day thumbnail"
          />
        </ImageContainerStyles>
      </PageWrapper>
      <Footer />
    </PageStyles>
  )
}

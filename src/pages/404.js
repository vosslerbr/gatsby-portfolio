import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Title from "../components/title"

const ContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`

export default function FourOhFour() {
  return (
    <ContainerStyles>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oops! All 404s</title>
      </Helmet>
      <Title name="404"></Title>
      <p>
        Whoops! Either that page doesn't exist or there's a tear in the
        space-time continuum.
      </p>
      <p>Probably the first one.</p>
    </ContainerStyles>
  )
}

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const CardStyles = styled.div`
  width: 100%;
  grid-column: span 6;

  @media (max-width: 620px) {
    grid-column: span 12;
  }
`

const ImageStyles = styled.img`
  width: 100%;
  border-radius: 5px;
`

const H2Styles = styled.h2`
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 0.5rem 0 0.25rem 0;
`

const PStyles = styled.p`
  font-size: 0.75rem;
  opacity: 0.75;
  margin: 0;
  display: inline;
`

export default function ProjectCard(props) {
  const skills = props.skills.join(" | ")

  return (
    <CardStyles>
      <Link to={props.to}>
        <ImageStyles src={require(`../images/${props.source}.png`)} />
      </Link>

      <H2Styles>{props.title}</H2Styles>

      <PStyles>{skills}</PStyles>
    </CardStyles>
  )
}

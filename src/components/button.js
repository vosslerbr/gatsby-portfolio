import React from "react"
import styled from "styled-components"

const ButtonStyles = styled.a`
  border: 3px solid var(--orange);
  border-radius: 5px;
  padding: 0.75rem 1rem;
  display: inline-block;
  text-align: center;
  color: var(--white);
  text-decoration: none;
  font-size: 1rem;
  min-width: 142px;
  transition: 0.2s;
  margin-right: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.25px;
  font-weight: 400;

  :hover {
    background-color: var(--orange);
  }
`

export default function Button(props) {
  return (
    <ButtonStyles href={props.to} target="_blank" rel="noreferrer">
      {props.name}
    </ButtonStyles>
  )
}

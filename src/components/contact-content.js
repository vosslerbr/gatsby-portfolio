import React from "react"
import styled from "styled-components"

const ContactContentStyles = styled.div`
  grid-column: span 6;
  p {
    line-height: 150%;
  }

  @media (max-width: 760px) {
    grid-column: span 12;
    grid-row: 1 / 2;
  }
`

export default function ContactContent() {
  return (
    <ContactContentStyles>
      <h2>Got something to say? Just need a friend in these trying times?</h2>
      <p>Fill out this form and I’ll be in touch!</p>
      <p>
        You can also reach me directly by email at{" "}
        <a href="mailto:bradyvossler@gmail.com" className="link">
          bradyvossler@gmail.com
        </a>
      </p>
    </ContactContentStyles>
  )
}

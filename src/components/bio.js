import React from "react"
import styled from "styled-components"

const BioContainerStyles = styled.div`
  max-width: 656px;
  margin: auto;
  line-height: 150%;
  letter-spacing: 0.25px;
  font-weight: 400;
`

export default function Bio() {
  return (
    <BioContainerStyles>
      <p>
        Hey there! My name is Brady and I’m a front-end web developer. I live in
        Sartell, Minnesota with my wife, Sydney and our cat, Scotty.
      </p>

      <p>
        I graduated in 2018 with a certificate in web design. Since then I've
        been learning more about front-end development and creating some
        projects along the way. It's my goal to create simple, easy to use
        websites and web applications using the most cutting-edge frameworks and
        tools.
      </p>

      <p>
        My development toolbox includes technologies such as HTML, CSS (SCSS),
        JavaScript, and Git/GitHub. I’ve recently begun working with Gatsby, Sanity (headless CMS), and GraphQL to create fast, modern websites.
      </p>
    </BioContainerStyles>
  )
}

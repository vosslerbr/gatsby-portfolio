import React from "react"
import styled from "styled-components"

const MainStyles = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`

export default function PageWrapper({ children }) {
  return <MainStyles>{children}</MainStyles>
}

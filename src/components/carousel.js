import React from "react"
import styled from "styled-components"
import CloudinaryImage from "./CloudinaryImage"

const CarouselStyles = styled.div`
  display: flex;
  flex-direction: row;
  height: 325px;
  width: 100%;
  max-width: 1000px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin-bottom: 0.5rem;

  span {
    display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

export default function Carousel() {
  return (
    <CarouselStyles>
      <CloudinaryImage name="IMG_1" />
      <CloudinaryImage name="IMG_2" />
      <CloudinaryImage name="IMG_3" />
      <CloudinaryImage name="IMG_4" />
    </CarouselStyles>
  )
}

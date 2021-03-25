import React from "react"
import Nav from "../components/nav"
import PageWrapper from "../components/pagewrapper"
import Title from "../components/title"
import ContactContent from "../components/contact-content"
import ContactForm from "../components/contact-form"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContactContainerStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, auto);
`

export default function Contact() {
  return (
    <PageStyles>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brady Vossler's Portfolio | Contact</title>
      </Helmet>
      <Nav />
      <PageWrapper>
        <Title name="Contact" />
        <ContactContainerStyles>
          <ContactForm />
          <ContactContent />
        </ContactContainerStyles>
      </PageWrapper>
      <Footer />
    </PageStyles>
  )
}

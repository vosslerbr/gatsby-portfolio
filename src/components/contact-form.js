import React from "react"
import styled from "styled-components"

const FormStyles = styled.form`
  grid-column: span 6;
  display: flex;
  flex-direction: column;

  :valid button {
    opacity: 1;
  }

  @media (max-width: 760px) {
    grid-column: span 12;
    grid-row: 2 / -1;
  }
`

const InputStyles = styled.input`
  -webkit-appearance: none;
  background-color: var(--med-gray);
  border: none;
  border-radius: 0;
  -webkit-border-radius: 0px;
  box-shadow: var(--main-shadow);
  color: var(--white);
  font-family: var(--main-font);
  font-size: 1rem;
  margin: 0.5rem 0 1.5rem 0;
  padding: 1rem;
  border-radius: 5px;

  :focus {
    outline: 1px solid var(--white);
  }
`

const TextAreaStyles = styled.textarea`
  -webkit-appearance: none;
  background-color: var(--med-gray);
  border: none;
  border-radius: 0;
  -webkit-border-radius: 0px;
  box-shadow: var(--main-shadow);
  color: var(--white);
  font-family: var(--main-font);
  font-size: 1rem;
  margin: 0.5rem 0 1.5rem 0;
  padding: 1rem;
  border-radius: 5px;
  resize: none;

  :focus {
    outline: 1px solid var(--white);
  }
`

const ButtonStyles = styled.button`
  background-color: var(--green);
  border: none;
  opacity: 0.5;
  color: var(--dark-gray);
  cursor: pointer;
  font-family: var(--main-font);
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  border-radius: 5px;
  transition: 0.2s;
`

export default function ContactForm() {
  return (
    <FormStyles
      action="https://formspree.io/bradyvosslerwebdev@gmail.com"
      method="POST"
    >
      <label htmlFor="email">Your Email</label>
      <InputStyles
        type="email"
        id="email"
        name="_replyto"
        placeholder="Your email"
        required
      />

      <label htmlFor="subject">Subject</label>
      <InputStyles
        type="text"
        id="subject"
        name="Subject"
        placeholder="Subject"
        required
      />

      <label htmlFor="message">Message</label>
      <TextAreaStyles
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Type your message here!"
        required
      ></TextAreaStyles>

      {/* <input type="text" name="_gotcha" style={{ display: `none` }} /> */}

      <ButtonStyles type="submit">Send</ButtonStyles>
    </FormStyles>
  )
}

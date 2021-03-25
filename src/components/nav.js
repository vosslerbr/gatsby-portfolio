import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/b-logo.svg"
import { BiHomeAlt, BiFace, BiAt, BiEditAlt } from "react-icons/bi"

const NavStyles = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
  a {
    color: var(--white);
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 400px;
    margin-left: 1rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .active {
    background-color: var(--orange);
  }
`

const UlStyles = styled.ul`
  margin: 0;
`

const ListLink = props => (
  <li style={{ display: `inline-block` }}>
    <Link to={props.to} activeClassName="active">
      {props.children}
    </Link>
  </li>
)

export default function Nav() {
  return (
    <NavStyles>
      <Link to="/" style={{ margin: `0`, padding: `0` }}>
        <img src={Logo} id="footerLogo" alt="logo" />
      </Link>

      <UlStyles>
        <ListLink to="/">
          <BiHomeAlt
            style={{ height: "1.5rem", width: "1.5rem" }}
            title="Home"
          />
        </ListLink>
        <ListLink to="/about/">
          <BiFace
            style={{ height: "1.5rem", width: "1.5rem" }}
            title="About Me"
          />
        </ListLink>
        <ListLink to="/contact/">
          <BiAt
            style={{ height: "1.5rem", width: "1.5rem" }}
            title="Contact Me"
          />
        </ListLink>
        <ListLink to="/projects/">
          <BiEditAlt
            style={{ height: "1.5rem", width: "1.5rem" }}
            title="My Projects"
          />
        </ListLink>
      </UlStyles>
    </NavStyles>
  )
}

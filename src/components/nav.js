import React from "react"
import { Link } from "gatsby"
import "../styles/nav-styles.css"

const ListLink = props => (
  <li style={{ display: `inline-block` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Nav() {
  return (
      <nav>
        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
        </ul>
      </nav>
  )
}
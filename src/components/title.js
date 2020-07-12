import React from "react"

export default function Title(props) { return (<h1 style={{ color: `#e75748`,
    fontWeight: `900`,
    fontSize: `3rem`,
    textTransform: `uppercase`,
    marginBottom: `2rem` }}>{props.name}</h1>) }
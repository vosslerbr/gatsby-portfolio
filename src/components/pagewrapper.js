import React from "react"
import "../styles/pagewrapper-styles.css";

export default function PageWrapper({children}) {
  return (
      <main>
          {children}
      </main>
  )
}
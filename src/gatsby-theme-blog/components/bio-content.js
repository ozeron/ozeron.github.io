import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Hello, I'm <Styled.a href="https://twitter.com/ethernalnow">Alex Lapchenko</Styled.a>
      <br />
      I blog about products and productivity.
    </>
  )
}

import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Hello, I'm <Styled.a href="https://twitter.com/hey_iam_alex">Alex Lapchenko</Styled.a>
      <br />
      I blog about products and productivity.
      <br />
      <h2>Projects</h2>
      <ul>
        <li><Styled.a href="http://twible.alexlapchenko.com/">Twible – distraction free writing experience</Styled.a></li>
      </ul>
    </>
  )
}

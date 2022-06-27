import Logo from "../components/logo"
import Center from "../components/Center"
import short from "short-uuid"
import React from "react"
import { link } from "fs"

const styles = {
  button: {
    float: "right",
    marginLeft: "auto",
    borderRadius: "5px",
    border: "0px",
    backgroundColor: "var(--four-color)",
    color: "var(--two-color)"
  },
  link: {},
  innerContainer: {
    backgroundColor: "var(--one-color)",
    borderRadius: "5px",
    display: "flex",
    padding: "10px"
  },
  message: {
    textAlign: "center",
    verticalAlign: "middle",
    margin: "10px"
  }
} as const

export default function() {
  const COPY_BUTTON_ID = "copy-button"
  const BUTTON_TEXT_CHANGE_TIMEOUT = 1 * 1000
  
  let link = ""

  let buttonDebouce = false
  const onButtonClick = async () => {
    // Debouce the button click
    if (buttonDebouce) {
      return
    }
    buttonDebouce = true

    const copyButton = document.getElementById(COPY_BUTTON_ID)

    if (!navigator.clipboard) {
      // Clipboard API not available
      copyButton.innerHTML = "Not Copied ❌"
      setTimeout(() => {
        copyButton.innerHTML = "Copy"
        buttonDebouce = false
      }, BUTTON_TEXT_CHANGE_TIMEOUT)
    } else {
      // Copy link to clipboard
      await navigator.clipboard.writeText(link)
      console.log(link)
      copyButton.innerHTML = "Copied ✅"
      setTimeout(() => {
        copyButton.innerHTML = "Copy"
        buttonDebouce = false
      }, BUTTON_TEXT_CHANGE_TIMEOUT)
    }
  }

  React.useEffect(() => {
    document.title = "🥵😬"

    link = `${window.location.href}game/${short.generate()}`
    document.getElementById("link").innerHTML = link
  })

  return (
  <div>
    <Logo/>
    <Center width="525px" height="auto">
      <div style={styles.message}>Copy the link and share with friends to start a game</div>
      <div style={styles.innerContainer}>
        <div id="link" style={styles.link}>
          {link}
        </div>
        <button id={COPY_BUTTON_ID} style={styles.button} onClick={onButtonClick}>
          Copy
        </button>
      </div>
    </Center>
  </div>
  )
}

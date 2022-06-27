import Logo from "../components/logo"
import short from "short-uuid"
import React from "react"
import { link } from "fs"

const styles = {
  container: {
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:" translate(-50%, -50%)",
    width: "525px",
  },
  button: {
    float: "right",
    marginLeft: "auto",
    borderRadius: "5px",
    border: "0px",
    backgroundColor: "var(--four-color)",
    color: "var(--two-color)"
  },
  link: {
    color: "var(--two-color)",
  },
  innerContainer: {
    backgroundColor: "var(--one-color)",
    borderRadius: "5px",
    display: "flex",
    padding: "10px"
  },
  message: {
    color: "var(--two-color)",
    textAlign: "center",
    verticalAlign: "middle",
    margin: "10px"
  }
} as const

export default function index() {
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
    document.title = "🥵😩"

    link = `${window.location.href}game/${short.generate()}`
    document.getElementById("link").innerHTML = link
  })

  return (
  <div>
    <Logo/>
    <div style={styles.container}>
      <div style={styles.message}>Copy the link and share with friends to start a game</div>
      <div style={styles.innerContainer}>
        <div id="link" style={styles.link}>
          {link}
        </div>
        <button id={COPY_BUTTON_ID} style={styles.button} onClick={onButtonClick}>
          Copy
        </button>
      </div>
    </div>
  </div>
  )
}

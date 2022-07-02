import styles from "./copy-button.module.css"

export default function({copyText}) {
  const BUTTON_TEXT_CHANGE_TIMEOUT = 1 * 1000
  const COPY_BUTTON_ID = "copy-button"

  let buttonDebouce = false
  const onClick = async () => {
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
      // Hacky, but it works
      if (typeof(copyText) == "object") {
        copyText = await copyText
      }

      await navigator.clipboard.writeText(copyText)
      copyButton.innerHTML = "Copied ✅"
      setTimeout(() => {
        copyButton.innerHTML = "Copy"
        buttonDebouce = false
      }, BUTTON_TEXT_CHANGE_TIMEOUT)
    }
  }

  return (
    <button id={COPY_BUTTON_ID} className={styles.copyButton} onClick={onClick}>
      Copy
    </button>
  )
}
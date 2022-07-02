import Center from "../components/center"
import short from "short-uuid"
import React from "react"
import Textbox from "../components/textbox"
import CopyButton from "../components/copy-button"
import styles from "./index.module.css"

export default function() {  
  let link = new Promise((res, rej) => {
    React.useEffect(() => {
      const id = short.generate()
      res(`${window.location.host}/a/${id}`)
    })
  })

  link.then(val => {
    document.getElementById("link").innerHTML = val as string
  })

  return (
    <Center width="650px" height="auto">
      <Textbox text="Copy the link and share with friends to start a game"/>
      <div className={styles.innerContainer}>
        <div id="link"/>
        <div className={styles.buttonContainer}>
          <CopyButton copyText={link}/>
        </div>
      </div>
    </Center>
  )
}

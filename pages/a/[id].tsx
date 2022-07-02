import React from "react"
import Center from "../../components/center"
import Textbox from "../../components/textbox"
import styles from "./[id].module.css"
import { useRouter } from "next/router"

export default function() {
  const router = useRouter()
  const id = router.query.id as string

  const onClick = () => {
    const nameInput = document.getElementById("name-input") as HTMLInputElement
    location.href = `/api/join-game/${id}/${nameInput.value}`
  }

  React.useEffect(() => {
    const nameInput = document.getElementById("name-input")
    nameInput.focus()
  })

  return (
    <Center width="auto" height="auto">
      <Textbox text="What do you want to be called"/>
      <div className={styles.container}>
        <input id="name-input" type="text" autoFocus className={styles.nameInput} maxLength={25}/>
        <button id="enter-button" className={styles.enter} onClick={onClick} >
          👍
        </button>
      </div>
    </Center>
  )
}
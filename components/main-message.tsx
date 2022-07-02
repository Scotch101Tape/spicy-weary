import Center from "./center"
import styles from "./main-message.module.css"

export default function({children}) {
  return (
    <Center width="auto" height="auto">
      <div className={styles.mainMessage}>
        {children}
      </div>
    </Center>
  )
}
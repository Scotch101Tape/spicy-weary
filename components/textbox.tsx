import styles from "./textbox.module.css"

export default function({text}) {
  return (
    <div className={styles.textbox}>
      {text}
    </div>
  )
}
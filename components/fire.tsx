import Textbox from "./textbox"

export default function({x, y, highlighted, name}) {
  const styles = {
    fire: {
      fontSize: "4em",
      textShadow: highlighted ? "-10px -10px 40px var(--special-color), -10px 10px 40px var(--special-color), 10px -10px 40px var(--special-color), 10px 10px 40px var(--special-color)" : "0px 0px 0px",
    },
    container: {
      position: "absolute",
      top: y,
      left: x,
      transform:" translate(-50%, -50%)",
    },
    name: {
      fontSize: "1.5em",
      fontWeight: "bold",
      color: "var(--text-color)",
      textAlign: "center",
    }
  } as const

  return (
    <div style={styles.container}>
      <div style={styles.fire}>
        🔥
      </div>
      <div style={styles.name}>
        {name}
      </div>
    </div>
    
  )
}
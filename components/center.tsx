export default function({width, height, children}) {
  const styles = {
    container: {
      width: width,
      height: height,
      margin: "auto",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform:" translate(-50%, -50%)",
    }
  } as const

  return (
    <div style={styles.container}>
      {children}
    </div>
  )
}
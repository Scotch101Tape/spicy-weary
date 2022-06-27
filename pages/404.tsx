import Center from "../components/Center"

const styles = {
  text: {
    fontSize: "40px"
  }
} as const

export default function() {
  return (
    <Center width="auto" height="auto">
      <div style={styles.text}>
        404 💀
      </div> 
    </Center>
  )
}
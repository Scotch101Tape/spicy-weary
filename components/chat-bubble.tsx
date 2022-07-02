import styles from "./chat-bubble.module.css"
import Chat from "../utils/chat"

export default function({chat}: {chat: Chat}) {
  return (
    <div className={chat.side == "left" ? styles.containerLeft : styles.containerRight}>
      <div className={chat.side == "left" ? styles.chatBubbleLeft : styles.chatBubbleRight}>
        {chat.text}
      </div>
    </div>
  )
}
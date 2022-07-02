import ChatBubble from './chat-bubble';
import Chat from '../utils/chat';
import styles from "./chat-viewer.module.css";

export default function({chats}: {chats: Chat[]}) {
  return (
    <div className={styles.chats}>
      <div className={styles.innerContainer}>
        {chats.reverse().map((chat, i) => (
          <ChatBubble key={i} chat={chat}/>
        ))}
      </div>
    </div>
  )
}
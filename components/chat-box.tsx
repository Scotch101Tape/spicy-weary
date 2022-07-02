import Chats from "./chat-viewer"
import styles from "./chat-box.module.css"
import React from "react"
import Chat from "../utils/chat"
import { SocketContext, SocketContextInterface } from "../context/socket-context"

/*export default function({chats}) {
  const onClick = () => { 
    console.log("send the message")
  }

  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      onClick()
    }
  }

  React.useEffect(() => {
    const messageInput = document.getElementById("message-input")
    messageInput.focus()
  })

  return (
    <div className={styles.container}>
      <Chats chats={chats}/>
      <div className={styles.bottomContainer}>
        <textarea id="message-input" className={styles.messageInput} onKeyDown={onKeyDown}></textarea>
        <button className={styles.sendButton} onClick={onClick}>📣</button>
      </div>
    </div>
  )
}*/


export default class ChatBox extends React.Component<{}, {chats: Chat[]}> {
  static contextType = SocketContext

  constructor(props) {
    super(props)
    this.state = {
      chats: [],
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Chats chats={this.state.chats}/>
        <div className={styles.bottomContainer}>
          <textarea id="message-input" className={styles.messageInput} onKeyDown={e => {if (e.key == "Enter") {this.sendMessage(); e.preventDefault()}}}></textarea>
          <button className={styles.sendButton} onClick={() => this.sendMessage()}>📣</button>
        </div>
      </div>
    )
  }

  componentDidMount(): void {
    const {socket} = this.context as SocketContextInterface

    
  }

  addChat(chat) {
    this.setState({
      chats: this.state.chats.concat(chat)
    })
  }

  sendMessage() {
    const {socket} = this.context as SocketContextInterface
    const message = document.getElementById("message-input") as HTMLTextAreaElement

    socket.emit("sendMessage", message.value)
    message.value = ""
    message.selectionEnd = 0
    message.selectionStart = 0
    message.focus()
  }
}
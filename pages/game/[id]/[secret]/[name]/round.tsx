import Center from "../../../../../components/center";
import ChatBox from "../../../../../components/chat-box";
import Chat from "../../../../../utils/chat";

export default function() {
  let chats: Chat[] = []
  for (let i = 0; i < 100; i++) {
    chats.push(new Chat(
      i % 2 == 0 ? "left" : "right",
      `${i} hello world this is sample text lol :))) I am going to type a little more in here, in fact I may as well write a paragraph, you see everything in this world is different so that is great because I am rambling and even that is stupid so sorry to put you through this.`
    ))
  }

  return (
    <Center width="auto" height="auto">
      <ChatBox/>
    </Center>
  )
}
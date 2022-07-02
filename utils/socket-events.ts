import Chat from "./chat";

export interface ServerToClientEvents {
  // Lobby
  playerJoined: (username: string) => void
  playerLeft: (username: string) => void
  gameStart: () => void

  // Round
  newMessage: (message: Chat) => void
  newChatters: (leftPlayer: string, rightPlayer: string) => void
  onSide: (username: string, side: "left" | "right") => void
  gameEnd: () => void

  // End
}

export interface ClientToServerEvents {
  // Naming
  checkUsername: (roomId: string, username: string) => void

  // Round
  sendMessage: (roomId: string, message: string) => void
  pickSide: (roomId: string, side: "left" | "right") => void
}

export interface InterServerEvents {
  
}

export interface SocketData {
  // The room ids that the socket is allowed in
  roomIds: string[]
}

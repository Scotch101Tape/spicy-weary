import React from 'react';
import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "../utils/socket-events"

export interface SocketContextInterface {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>
}

export const SocketContext = React.createContext<SocketContextInterface>({} as SocketContextInterface)

let socket
export function SocketWrapper({ children }) {
  React.useEffect(() => {
    fetchdata()
    return
  })
  
  const fetchdata = async () => {
    await fetch('/api/socket')
    socket = io()
  }

  return (
    <SocketContext.Provider value={{socket}}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  return React.useContext(SocketContext);
}

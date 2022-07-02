/*
import create from 'zustand'

const useStore = create(set => ({
  count: 1,
  inc: () => set(state => ({ count: state.count + 1 })),
}))

function Controls() {
  const inc = useStore(state => state.inc)
  return <button onClick={inc}>one up</button>
}

function Counter() {
  const count = useStore(state => state.count)
  return <h1>{count}</h1>  
}
*/
import short from 'short-uuid';
import create from "zustand"
import {persist} from "zustand/middleware"

interface AuthsState {
  auths: {[key: string]: string}
  add: (roomId: string, username: string) => void
  getSecret: (roomId: string, username: string) => string
  checkSecret: (roomId: string, username: string, secret: string) => boolean
}

function createKey(roomId: string, username: string): string {
  if (username.includes(" ") || roomId.includes(" ")) {
    // Username and secret CANNOT contain the seperation character
    throw new Error("Username and secret CANNOT contain the seperation character")
  }

  return roomId + " " + username
}

const useAuths = create<AuthsState>(
  persist(
    (set, get) => ({
      auths: {},
      add: (roomId: string, username: string) => set(state => {
        const key = createKey(roomId, username)
        const secret = short.generate()
        return {
          auths: Object.assign({}, (state as any).auths, {[key]: secret})
        }
      }),
      getSecret: (roomId: string, username: string) => {
        const key = createKey(roomId, username)
        return (get() as any).auths[key]
      },
      checkSecret: (roomId: string, username: string, secret: string) => {
        const key = createKey(roomId, username)
        return (get() as any).auths[key] == secret
      }
    })
  ) as any
)

export default useAuths
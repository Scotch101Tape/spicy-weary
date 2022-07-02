/*
Ok
Here I am, I really don't have much time but I found out a way to make this work.
(Thanks copilot for autocompletetion)
I have to define the rooms as an object, not an instance of a class
I have to NOT export the variable
I have to interact with it through functions

Alr
I got this
*/

import short from 'short-uuid';

/*


export class Room {
  id: string
  roomState: RoomState
  usernames: {[key: string]: string}

  constructor(id) {
    this.id = id
    this.usernames = {}
    this.roomState = RoomState.Lobby
  }

  // Returns the secret that the player should use to join the room
  // Also it adds the player to the room
  addPlayer(username: string): string {
    if(!this.canJoin(username)) {
      throw new Error("Cannot join room")
    }

    const secret = short.generate()

    this.usernames[username] = secret

    return secret
  }

  usernamesAsList(): string[] {
    return Object.keys(this.usernames)
  }

  canJoin(username: string): boolean {
    return this.usernameWorks(username) && this.roomState === RoomState.Lobby
  }

  usernameWorks(username: string): boolean {
    return !this.usernamesAsList().includes(username)
  }

  checkSecret(username: string, secret: string): boolean {
    return this.usernames[username] == secret
  }
}

export class Rooms {
  rooms: {[key: string]: Room}= {}

  constructor () {
    this.rooms = {}
  }

  room(id: string) {
    return this.rooms[id]
  }

  addRoom(id: string) {
    this.rooms[id] = new Room(id)
  }

  removeRoom(id: string) {
    delete this.rooms[id]
  }
}

export let rooms = new Rooms()
*/

const RoomState = {
  Lobby: 0,
  Round: 1,
  End: 2
}



// Auths contains roomdId + username -> secret mapping
// This makes it so the key is unique and the secret as a validifier
const auths = []

function createKey(roomId: string, username: string): string {
  if (username.includes(" ") || roomId.includes(" ")) {
    // Username and secret CANNOT contain the seperation character
    throw new Error("Username and secret CANNOT contain the seperation character")
  }

  return roomId + " " + username
}

export function checkAuth(roomId: string, username: string, secret: string): boolean {
  let key
  try {
    key = createKey(roomId, username)
  } catch (e) {
    return false
  }
  
  return auths.find(a => a.key == key && a.secret == secret) != null
}

export function addAuth(roomId: string, username: string): string {
  const key = createKey(roomId, username)
  const secret = "3"
  auths.push({
    key,
    secret
  })
  return secret
}

/*export function removeAuth(roomId: string, username: string) {
  const key = createKey(roomId, username)
  delete auths[key]
}*/

export function getAuths() {
  return auths
}

export function initAuths() {
  let _auths = auths || []

  return _auths
}

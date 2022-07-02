import { NextResponse, NextRequest } from 'next/server'
import { checkAuth, getAuths } from "./lib/auth"

// Sad I have to do this 😭
const dataRegex = new RegExp("game/([^/]*)/([^/]*)/([^/]*)")

export function middleware(req: NextRequest) {
  const result = dataRegex.exec(req.url)
  if (result == null) {
    return NextResponse.redirect(new URL("/404", req.url))
  }

  const id = result[1]
  const secret = result[2]
  const username = result[3]

  console.log(id, secret, username)

  console.log(getAuths())

  // Check if the room with the id accepts the secret
  if (checkAuth(id, username, secret)) {
    console.log("works")

    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL("/cant-join", req.url))
  }
}

export const config = {
  matcher: "/game/:path*",
}
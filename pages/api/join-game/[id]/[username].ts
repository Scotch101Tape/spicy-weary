import { NextApiRequest, NextApiResponse } from "next"
import {addAuth, getAuths} from "../../../../lib/auth"

export default function(req: NextApiRequest, res: NextApiResponse) {
  const {id, username} = req.query as {id: string, username: string}

  if (username.includes(" ") || id.includes(" ")) {
    res.redirect("/cant-join")
  }

  let secret = addAuth(id, username)

  console.log(getAuths())

  res.redirect(`/game/${id}/${secret}/${username}/lobby`)
}

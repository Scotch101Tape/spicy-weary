import {NextApiRequest, NextApiResponse } from "next"
import useAuths from "../../../lib/auths"

export default async function(req: NextApiRequest, res: NextApiResponse) {


  fetch("http://localhost:3000/api/counter").then(r => r.json()).then(r => console.log(r))
  

  res.redirect("/api/testing-api/check")
}
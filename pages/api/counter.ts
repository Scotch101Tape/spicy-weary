import { NextApiRequest, NextApiResponse } from "next";

let counter = {
  count: 0,
}

export default function(req: NextApiRequest, res: NextApiResponse) {
  counter = {count: counter.count + 1}
  console.log(counter)

  res.status(200).json(counter)
}
export default class Chat {
  readonly side: "left" | "right"
  readonly text: string

  constructor(side: "left" | "right", text: string) {
    this.side = side
    this.text = text
  }

  reverseSide(): Chat {
    return new Chat(this.side == "left" ? "right" : "left", this.text)
  }
}
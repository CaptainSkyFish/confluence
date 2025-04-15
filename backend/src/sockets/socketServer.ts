import { WebSocket, WebSocketServer } from "ws"
const wss = new WebSocketServer({ port: 2025 })

let users = 0
let allSockets: WebSocket[] = []

wss.on("connection", (socket) => {
  allSockets.push(socket)
  ++users
  console.log("user #" + users + "connected.")

  socket.on("message", (message) => {
    allSockets.forEach(s => {
      s.send(message.toString())
    })
  })

  socket.on("disconnect", () => {
    allSockets = allSockets.filter(x => x != socket)
  })


})


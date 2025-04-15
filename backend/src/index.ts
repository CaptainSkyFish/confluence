import userRoutes from "./routes/userRoutes"
import roomRoutes from "./routes/roomRoutes"
import messageRoutes from "./routes/messageRoutes"
import express from "express"

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})

app.use("/api/v1/room", roomRoutes)

app.use("/api/v1/user", userRoutes)

app.use("api/v1/messages", messageRoutes)

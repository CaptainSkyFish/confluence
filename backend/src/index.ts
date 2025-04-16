import userRoutes from "./routes/userRoutes"
import roomRoutes from "./routes/roomRoutes"
import messageRoutes from "./routes/messageRoutes"
import express from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use(cookieParser())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})

app.use("/api/v1/room", roomRoutes)

app.use("/api/v1/user", userRoutes)

app.use("api/v1/messages", messageRoutes)

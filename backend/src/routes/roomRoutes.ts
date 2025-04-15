import express from "express"
import authenticateUser from "./middleware"
import getAllRoomsHandler from "./roomRoutes/getAllRoomsHandler"
import createRoomHandler from "./roomRoutes/createRoomHandler"
import getUsersInRoomHandler from "./roomRoutes/getUsersInRoomHandler"
import joinRoomHandler from "./roomRoutes/joinRoomHandler"
import leaveRoomHandler from "./roomRoutes/leaveRoomHandler"

const router = express.Router()

router.post("/", authenticateUser, createRoomHandler)
router.get("/all", getAllRoomsHandler)
router.get("/:roomId/users", authenticateUser, getUsersInRoomHandler)
router.post("/join/:roomId", authenticateUser, joinRoomHandler)
router.post("/leave/:roomId", authenticateUser, leaveRoomHandler)

export default router

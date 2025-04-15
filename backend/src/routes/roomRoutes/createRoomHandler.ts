import { Request, RequestHandler, Response } from "express"
import prisma from "../../config/prisma"

//Create room
const createRoomHandler: RequestHandler = async (req: Request, res: Response) => {
  const roomName = req.body.roomName
  try {
    const room = await prisma.room.create({
      data: { roomName },
    })
    res.status(201).json(room)
    return
  } catch (e) {
    res.status(500).json({ mes: "Error Creating Room!" })
  }
}

export default createRoomHandler

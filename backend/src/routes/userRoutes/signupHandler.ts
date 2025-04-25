import { Request, RequestHandler, Response } from "express"
import prisma from "../../config/prisma"
import * as argon2 from "argon2"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET environment variable.");
}
//Create User
const signupHandler: RequestHandler = async (req: Request , res: Response ) => {
  try {
    let { username, password, bio } = req.body

    if(!username || !password) {
      res.status(400).json({errMes: "Missing required fields"})
      return
    }
    const hashedPassword = await argon2.hash(password) 
    if(!bio) {
      bio = `Hey there, I'm ${username}`
    }
    if(!await prisma.user.findUnique({where: {username}})){
      const user = await prisma.user.create({
        data: { 
          username,
          bio,
          password: hashedPassword }
      })
      const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET!)
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      })

      res.status(201).json(user)
      return
    }
    res.status(409).json({errMes: "Username taken!"})
    return
  } catch (error) {
    console.log(error)
    res.status(500).json({ errMes: "Error Creating User" });
  }
}

export default signupHandler

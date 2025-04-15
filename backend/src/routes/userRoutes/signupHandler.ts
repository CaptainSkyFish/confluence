import { Request, RequestHandler, Response } from "express"
import prisma from "../../config/prisma"
import * as argon2 from "argon2"

//Create User
const signupHandler: RequestHandler = async (req: Request , res: Response ) => {
  try {
    const { username, password } = req.body
    const hashedPassword = await argon2.hash(password) 

    if(!await prisma.user.findFirst({where: {username}})){
      const user = await prisma.user.create({
        data: { 
          username, 
          password: hashedPassword }
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

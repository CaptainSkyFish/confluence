import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies?.jwt;
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET!) as {
        userId: string;
        username: string;
      };
      req.user = decoded;
      next();
      return;
    }
    res.status(400).json({ errMes: "Unauthorized. Token missing." });
    return;
  } catch (e) {
    console.error(e);
    res.status(400).json({ errMes: "Error while authenticating user token" });
  }
};

export default authenticateUser;

import express from "express"
import signupHandler from "./userRoutes/signupHandler"
import signinHandler from "./userRoutes/signinHandler"
import signoutHandler from "./userRoutes/signoutHandler"
import deleteUserHandler from "./userRoutes/deleteUserHandler"
import authenticateUser from "./middleware"

const router = express.Router()

router.post("/signup", signupHandler)
router.post("/signin", signinHandler)
router.post("/signout", signoutHandler)
router.delete("/delete", authenticateUser, deleteUserHandler)
export default router

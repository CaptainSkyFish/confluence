import express from "express"
import signupHandler from "./userRoutes/signupHandler"
import signinHandler from "./userRoutes/signinHandler"
import signoutHandler from "./userRoutes/signoutHandler"

const router = express.Router()

router.post("/signup", signupHandler)
router.post("/signin", signinHandler)
router.post("/signout", signoutHandler)

export default router

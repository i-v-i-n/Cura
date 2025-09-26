import express from "express"
import { getHistory, loginUser ,signupUser} from "../Controllers/userController.js"
import { authMiddleware } from "../Middlewares/authMiddleware.js"

const userRouter=express.Router()

userRouter.post("/login",loginUser)
          .post("/signup",signupUser)
          .get("/history",authMiddleware,getHistory)

export default userRouter
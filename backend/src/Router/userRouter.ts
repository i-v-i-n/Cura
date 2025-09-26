import express from "express"
import { loginUser ,signupUser} from "../Controllers/userController.js"

const userRouter=express.Router()

userRouter.post("/login",loginUser)
          .post("/signup",signupUser);

export default userRouter
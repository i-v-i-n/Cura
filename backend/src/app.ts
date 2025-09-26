import express from "express"
import userRouter from "./Router/userRouter.js";

const app=express();

app.use(express.json())
app.use("/api/user",userRouter)

export default app;
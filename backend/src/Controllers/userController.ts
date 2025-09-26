import type { Request, Response } from "express";
import prisma from "../constants/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
interface loginDetails{
    username:string
    password:string
}
interface signUpDetails extends loginDetails{
    name:string,
    email:string
}
export async function loginUser(req:Request,res:Response){
    const reqBody:loginDetails=req.body
    if(!reqBody.username||!reqBody.password){
        return res.status(400).json({
            status:"fail",
            message:"All fields are required"
        })
    }
    try{
        const details=await prisma.user.findUnique({
            where:{
                username:reqBody.username
            }
        })
        if(!details){
            return res.status(400).json({
                status:"fail",
                message:"User doesn't exist!"
            })
        }
        const isUser=await bcrypt.compare(reqBody.password,details.password)
        if(!isUser){
            return res.status(400).json({
                status:'fail',
                message:"Password or username doesn't match!"
            })
        }
        const token=jwt.sign({userId:details.userId},process.env.JWT_SECRET!)
        return res.status(200).json({
            status:"success",
            message:`Welcome back ${details.name}`,
            token:token
        })
    }catch(e){
        return res.status(400).json({
            status:"fail",
            message:e instanceof Error? e.message:"Something went wrong!"
        })
    }
}

export async function signupUser(req:Request,res:Response){
    const details:signUpDetails=req.body
    if(!details||!details.name||!details.username||!details.email||!details.password){
        return res.status(400).json({
            status:"fail",
            message:"All fields are required"
        })
    }
    try{
        const user=await prisma.user.create({
            data:{
                username:details.username,
                name:details.name,
                email:details.email,
                password:await bcrypt.hash(details.password,10)
            }
        })
        const token=jwt.sign({userId:user.userId},process.env.JWT_SECRET!)
        return res.status(201).json({
            status:"success",
            message:"User created successfully",
            user:user,
            token:token
        })
    }catch(e){
        return res.status(400).json({
            status:"fail",
            message:e instanceof Error? e.message:"Something went wrong!"
        })
    }
}
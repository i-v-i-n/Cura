import type {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"

export const authMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const authHeader=req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            status:"fail",
            message:"Unauthorized"
        })
    }
    const token=authHeader.split(" ")[1] || " "
    jwt.verify(token,process.env.JWT_SECRET||" ",(err,decoded)=>{
        if(err){
            return res.status(401).json({
                status:"fail",
                message:"Unauthorized"
            })
        }
        if (typeof decoded === "object" && decoded !== null && "userId" in decoded) {
            req.user = (decoded as jwt.JwtPayload).userId as string;
            next();
        } else {
            return res.status(401).json({
                status: "fail",
                message: "Unauthorized"
            });
        }
    })
}

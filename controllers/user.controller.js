import { Request, response,NextFunction } from "express";}
import *as userservice from '../services/user.service'

//post
export const postAmit=async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    const response=await userservice.postAmit(req.body)
    res.send(response)
}
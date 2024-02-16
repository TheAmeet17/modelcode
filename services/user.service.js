import { PrismaClient } from '@prisma/client'
import Boom from '@hapi/boom'
const prisma=new PrismaClient()

//post
export const postAmit=async (body)=>{
    const {title, status}=body
    return await prisma.amit.create({
        data:{
            title,
            status,
        },
    })
}
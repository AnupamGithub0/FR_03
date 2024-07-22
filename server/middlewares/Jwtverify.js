import jwt from 'jsonwebtoken'
import { User } from '../Models/User.js'
export const JwtVerify = async(req,res,next)=>{
    try {
        const accessToken = req.cookies?.accessToken
        if (!accessToken) {
            return res.json({
                success:false,
                message:"Unauthorized request"
            }) 
        }
        else{
            jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,(err,decode)=>{
                if(err){
                    return res.json({
                        success:false,
                        message:"Invalid token"
                    })  
                }
                else{
                    req.user = decode._id
                    next()
                }
            })
            
        }
        
    } catch (error) {
        return res.json(404).json({
            success:false,
            message:"Error while JwtVerify"
        })
        
    }

}
export const isAdmin = async(req,res,next)=>{
    try {
      const user = await User.findById(req.user)
      if (user.role !== 1) {
        return res.json({
            success:false,
            message:"You are not Admin"
        })
      }
      else{
       
        next()
      }
       
        
    } catch (error) {
        return res.json(404).json({
            success:false,
            message:"Error while JwtVerify"
        })
        
    }

}
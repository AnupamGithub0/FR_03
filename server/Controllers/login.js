import { User } from "../Models/User.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const userLogin = async(req,res)=>{
    try {
        const {email,password} = req.body
        if (!(email && password)) {
            return res.json({
                success:false,
                message:"All fields are required"
            })
        }
        const user = await User.findOne({email})
        if (!user) {
            return res.json({
                success:false,
                message:"User not exist !"
            })   
        }
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            const accessToken = jwt.sign({_id:user?._id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
            const refreshToken = jwt.sign({_id:user?._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
            res.cookie("accessToken",accessToken,{httpOnly:true,secure:true,maxAge:900000})
            res.cookie("refreshToken",refreshToken,{maxAge:9000000,httpOnly:true,secure:true,sameSite:"strict"})

            return res.status(200).json({
                success:true,
                data:user,
                message:"Successed login !"
            }) 
        }
        else{
            return res.json({
                success:false,
                message:"Password not match !"
            })
        }
        
    } catch (error) {
        return res.json({
            success:false,
            messagge:"Error while user login"
        })
    }
}
import { User } from "../../Models/User.js"

export const getUser = async(req,res)=>{
    const user = await User.findById(req.user)

    return res.json({
        success:true,
        data:user,
        message:"user get successfully"
    })

}

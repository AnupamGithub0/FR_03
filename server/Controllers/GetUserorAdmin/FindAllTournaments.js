import { Tournament } from "../../Models/CreateTournament.js"

export const findAllTournaments = async (req,res)=>{
    try {
        const tournaments = await Tournament.find()
        return res.json({
            success:true,
            data:tournaments,
            message:'Successed to fetch tournaments'
        })
        
    } catch (error) {
        return res.json({
            success:false,
            message:'Error while Tournaments found'
        })
    }
}
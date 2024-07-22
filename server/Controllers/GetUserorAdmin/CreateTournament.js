import { Tournament } from "../../Models/CreateTournament.js"


export const createTournament = async (req,res)=>{
    try {
        const {date,time,amPm,map,prizePool,perKill,joinCoins,totalPlayers,leftPlayers,mode} = req.body

        if (!(date,time,amPm,map,prizePool,perKill,joinCoins,totalPlayers,leftPlayers,mode)) {
            return res.json({
                success:false,
                message:"All fields are requied"
            }) 
        }

        const tournament = await Tournament.create({
            ...req.body,
            
        })
        return res.json({
            success:true,
            data:tournament,
            message:"Tournament created successed"
        })
    } catch (error) {
        return res.json({
            success:false,
            message:"Error while create tournament"
        })
        
    }
}
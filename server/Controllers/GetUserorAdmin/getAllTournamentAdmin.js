import { Tournament } from "../../Models/CreateTournament.js"


export const getAllTournamentAdmin = async (req,res)=>{
    try {
        const tournament = await Tournament.find().sort({ createdAt: 1 });
        if (!tournament) {
            return res.json({
                success:false,
                message:"Tournament empty now"
            })
        }

        return res.json({
            success:true,
            data:tournament,
            message:"Found all tournaments"
        })


        
    } catch (error) {
        return res.json({
            success:false,
            message:'Error while get all tournament'
        })
        
    }
}
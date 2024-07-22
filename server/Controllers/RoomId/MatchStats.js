import { MatchStats } from "../../Models/MatchStates.js"

export const matchStats = async (req,res)=>{
   try {
    const {tournamentsId,matchState} = req.body

    if (!tournamentsId) {
        return res.json({
            success:false,
            message:"Tournaments id is required",
            data:saveRoomId
        })
    }


    const saveRoomId = new MatchStats({
        tournamentsId,
        matchState
        
    })
     await saveRoomId.save()

    return res.json({
        success:true,
        message:"Successfully created match stats",
        data:saveRoomId
    })
    
   } catch (error) {
    return res.json({
        success:false,
        message:"Error while creating  match stats"
    })
    
   }
}

export const getMatchStats = async (req,res)=>{
    try {
        const {tournamentsId} = req.query
        const RoomStats = await MatchStats.findOne({tournamentsId})
        if(!RoomStats){
            return res.json({
                success:false,
                message:"Can't found room stats",
            })
        }
        return res.json({
            success:true,
            message:"Successfully fetch match stats",
            data:RoomStats
        })


    
     
    } catch (error) {
     return res.json({
         success:false,
         message:"Error while creating  match stats"
     })
     
    }
 }
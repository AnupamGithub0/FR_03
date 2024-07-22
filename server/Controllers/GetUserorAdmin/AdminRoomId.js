import { RoomIdAndPass } from "../../Models/AdminRoomId.js"

export const adminRoomId = async (req,res)=>{
    try {
        const {tournamentsId,roomId,password} = req.body

        const saveRoomId = new RoomIdAndPass({
            tournamentsId,
            roomId,
            password
            
        })
         await saveRoomId.save()

        return res.json({
            success:true,
            message:"Successfully room id and password have been created",
            data:saveRoomId
        })
        
    } catch (error) {
        return res.json({
            success:false,
            message:"Error while createing room id and password"
        })
    }
}
// controller file
export const getRoomIdAndPass = async (req, res) => {
  try {
    const { tournamentsId, userId } = req.query;



    const roomData = await RoomIdAndPass.findOne({ tournamentsId });
    if (!roomData) {
      return res.json({
        success: false,
        message: "Room ID and password Coming soon",
      });
    }

    return res.json({
      success: true,
      data: roomData,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error while fetching room ID and password",
    });
  }
};



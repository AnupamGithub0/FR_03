import mongoose from "mongoose";

const roomIdPasswordSchema = new mongoose.Schema({
    tournaments:[{
        type:mongoose.Types.ObjectId,
        ref:"Tournament"
    }],
    JoinedUser:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    match:{
        type:String,
        default:"Pending",
        enum:["Pending","Canceled","Success"]
    },
    roomId:{
        type:String
    },
    password:{
        type:String
    }

})

export const IdPassword = mongoose.model("RoomIdPassword",roomIdPasswordSchema)
import mongoose from "mongoose";

const RoomId = new mongoose.Schema({
  tournamentsId:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament", // Ensure this matches the name of your tournaments model
      required: true,
    },
  roomId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // matchStats:{
  //   type:String,
  //   default:"Pending",
  //   enum:["Pending","Live","Completed","Canceled"]
  // }
 
});

export const RoomIdAndPass = mongoose.model("RoomIdAndPass", RoomId);

import mongoose from "mongoose";

const roomIdPasswordSchema = new mongoose.Schema({
  tournamentsId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament", // Ensure this matches the name of your tournaments model
      required: true,
    },
  ],
  roomId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 
});

export const RoomId = mongoose.model("RoomId", roomIdPasswordSchema);

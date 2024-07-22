import mongoose from "mongoose";

const MatchStateShema = new mongoose.Schema(
  {
    tournamentsId:{
        type:String
    },
    matchState:{
        type:String,
        default:"Pending",
        enum:["Pending","Live","Completed","Canceled"],
        required:true
    }
    
  },
  { timestamps: true }
);

export const MatchStats = mongoose.model("MatchStats", MatchStateShema);

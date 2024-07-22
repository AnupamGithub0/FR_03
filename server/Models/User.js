import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    coins:{
        type:String,
    },
    role:{
        type:Number,
    },
    tournamentJoined:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tournament"
    }]


},{timestamps:true})

export const User = mongoose.model("User",userSchema)
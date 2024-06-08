import mongoose, { Schema } from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
     },

    phone:{
       type:Number,
       required:true
    },
    details:{
        type:String,
    }
    
},{timestamps:true})

export  const User=mongoose.model("User",userSchema)
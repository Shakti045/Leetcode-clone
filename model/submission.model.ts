import mongoose, { Types } from "mongoose";


export interface SubmissionType extends Document {
    _id:Types.ObjectId;
    user: Types.ObjectId ; 
    status: string;
    totaltime?: string;
    totalspace?: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
}


const submissionscheema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        required:true
    },
    totaltime:{
        type:String
    },
    totalspace:{
        type:String
    },
    code:{
        type:String,
        required:true
    }
},{timestamps:true});


export const Submission=mongoose.models?.Submission || mongoose.model("Submission",submissionscheema);
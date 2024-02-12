import mongoose, { Types } from "mongoose";

export interface ProfileType extends Document {
    _id:Types.ObjectId;
    userid: Types.ObjectId; 
    questionsDone: Types.ObjectId; 
    questionsAttempted: Types.ObjectId[] | [];
    Submissions: Types.ObjectId[] | []; 
    easyquestionsdone: number;
    mediumquestionsdone: number;
    hardquestionsdone: number;
}


const profilescheema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    questionsDone:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Question"
        }
    ],
    questionsAttempted:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Question"
        }
    ],
    Submissions:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Submission"
        }
    ],
    easyquestionsdone:{
        type:Number,
        default:0
    },
    mediumquestionsdone:{
        type:Number,
        default:0
    },
    hardquestionsdone:{
        type:Number,
        default:0
    }
})

export const Profile= mongoose.models?.Profile || mongoose.model("Profile",profilescheema);
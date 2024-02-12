import mongoose, { Types } from "mongoose";

export interface QuestionType extends Document {
    _id:Types.ObjectId;
    question_number: number;
    title: string;
    description: string;
    image: string[];
    examples: Types.ObjectId[] ; 
    testcases: Types.ObjectId[]; 
    constraints: string[];
    hints: string[];
    accepted: number;
    submissions: number;
    acceptancerate: number;
    companies: string[];
    likes: number;
    dislikes: number;
}

const questionscheema=new mongoose.Schema({
    question_number:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    image:[
        {
            type:String
        }
    ],
    examples:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Example"
        }
    ],
    testcases:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Testcase"
        }
    ],
    constraints:[
        {
            type:String,
        }
    ],
    hints:[
        {
            type:String,
        }
    ],
    accepted:{
        type:Number,
        default:0
    },
    submissions:{
        type:Number,
        default:0
    },
    acceptancerate:{
        type:Number,
        default:0
    },
    companies:[
        {
            type:String
        }
    ],
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    }
});

export const Question= mongoose.models?.Question || mongoose.model("Question",questionscheema);
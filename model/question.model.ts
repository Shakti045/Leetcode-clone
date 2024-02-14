import mongoose, { Types,Schema } from "mongoose";


export interface QuestionType extends Document {
    _id:Types.ObjectId;
    question_number: number;
    title: string;
    description: string;
    image?: string[];
    examples?: [
        {
            explanation: string;
            input: string;
            output: string;
            images: string[];
        }
    
    ]; 
    testcases?: [
        {
            input: any;
            output: any; 
        }
    
    ]; 
    constraints: string[];
    hints: string[];
    accepted: number;
    submissions: number;
    acceptancerate: number;
    companies: string[];
    likes: number;
    dislikes: number;
    level: string;
}

const questionscheema=new mongoose.Schema({
    question_number:{
        type:Number,
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
    images:[
        {
            type:String
        }
    ],
    examples:[
       {
        explanation:{
          type:String
         },
        input:{
            type:String
          ,required:true
        },
        output:{
            type:String
          ,required:true
        },
        images:[
            {
                type:String,
            }
        ]
       }
    ],
    testcases:[
        {
            input:{
                type:Schema.Types.Mixed,
                required:true
            },
            output:{
                type:Schema.Types.Mixed,
                required:true
            }
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
    },
    level:{
        type:String,
        required:true,
        enum:["Easy","Medium","Hard"],
    }
});

export const Question= mongoose.models?.Question || mongoose.model("Question",questionscheema);
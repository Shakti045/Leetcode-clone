import mongoose, { Types } from "mongoose";

export interface ExampleType extends Document {
    _id:Types.ObjectId;
    questionid: Types.ObjectId;
    input: string;
    output: string;
    explanation?: string;
    image: string[];
}

const examplescheema=new mongoose.Schema({
    questionid:{
        type:mongoose.Schema.ObjectId,
        ref:"Question"
    },
    input:{
        type:String,
        required:true,
    },
    output:{
        type:String,
        required:true,
    },
    explanation:{
        type:String
    },
    image:[
        {
            type:String
        }
    ]
})

export const Example= mongoose.models?.Example || mongoose.model("Example",examplescheema);
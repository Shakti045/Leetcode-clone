import mongoose, { Schema, Types} from "mongoose";


export interface TestCaseType extends Document {
    _id:Types.ObjectId;
    questionid: Types.ObjectId;
    input: any;
    output: any; 
}

const testcasescheema=new mongoose.Schema({
    questionid:{
        type:mongoose.Schema.ObjectId,
        ref:"Question"
    },
    input:{
        type:Schema.Types.Mixed
    },
    output:{
        type:Schema.Types.Mixed
    }
});

export const Testcase=mongoose.models?.Testcase || mongoose.model("Testcase",testcasescheema);
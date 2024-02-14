'use server'

import { Question, QuestionType } from "@/model/question.model"
import connectDb from "../db"
import { createquestionpropstype } from "@/utils/types";
import mongoose from "mongoose";
import axios from "axios";


export const createquestion=async(qsn:createquestionpropstype):Promise<boolean>=>{
    try {
        await connectDb();
        await Question.create(qsn);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}


export const getquestionslist=async():Promise<QuestionType[]>=>{
    try {
        await connectDb();
        const questions=await Question.find({},{_id:1,title:1,level:1,question_number:1,acceptancerate:1});
        return questions;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

export const getquestion=async(id:string):Promise<any>=>{
    try {
        await connectDb();
        const question=await Question.findById({_id: new mongoose.Types.ObjectId(id)});
        return JSON.parse(JSON.stringify(question));
    }
    catch (error) {
        console.log(error);
        throw new Error('Question not found');
    }
}



export const runcodeinjudge=async(code:string,language:string,questionid:string):Promise<boolean>=>{
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
          wait: 'true',
          fields: '*'
        },
        headers: {
          'content-type': 'application/json',
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': process.env.RapidAPI_Key as string,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        data: {
          language_id: 62,
          source_code: code,
          stdin: '',
        }
      };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return true;
    } catch (error) {
        throw new Error('Error in running code');
    }
};
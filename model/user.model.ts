import mongoose, { Types } from "mongoose";


export interface UserType extends Document{
  _id:Types.ObjectId;
  clerkId: string;
  username: string;
  email: string;
  ispremium: boolean;
  iconimage: string;
  profileId: Types.ObjectId;
}

const userSchema = new mongoose.Schema({
  clerkId:{
    type:String,
    required:true,
    unique:true
  },
  username:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    min:3
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
  },
  ispremium:{
    type:Boolean,
    default:false
  },
  iconimage:{
    type:String,
    required:true,
  },
  profileId:{
   type:mongoose.Schema.ObjectId,
   ref:"Profile"
  }
});

export const User= mongoose.models?.User || mongoose.model("User",userSchema);
'use server'

import { createUserProps, updateuserprops } from "@/utils/types";
import { Profile} from "@/model/profile.model";
import { User, UserType } from "@/model/user.model"
import connectDb from "../db";

export const createUser=async (user:createUserProps):Promise<UserType>=>{
    try {
       await connectDb();
       const newuser = await User.create(user);
       const newprofile = await Profile.create({userId:newuser._id});
       await User.findByIdAndUpdate(newuser._id,{profileId:newprofile._id});
       return newuser;
    } catch (error) {
        console.log("Error while creating user","=>",error);
        throw new Error("Something went wrong");
    }
}

export const deleteUser=async (id:string):Promise<void>=>{
    try{
        await connectDb();
        await User.findOneAndDelete({clerkId:id});
        return;
    }catch(error){
        console.log("Error while deleting user","=>",error);
        throw new Error("Something went wrong");
    }
}

export const updateUser=async(clerkId:string,user:updateuserprops):Promise<void>=>{
  try {
    await connectDb();
    await User.findOneAndUpdate({clerkId:clerkId},{...user});
  } catch (error) {
     console.log("Error while updating user","=>",error);
        throw new Error("Something went wrong");
  }
}

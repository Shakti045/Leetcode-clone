'use server'

import { createUserProps } from "@/constants/types";
import { Profile, ProfileType } from "@/model/profile.model";
import { User, UserType } from "@/model/user.model"

export const createUser=async (user:createUserProps):Promise<UserType>=>{
    try {
       const newprofile:any=await Profile.create();
       const newuser = await User.create({...user,profileId:newprofile._id});
       await Profile.findByIdAndUpdate({_id:newprofile._id},{userid:newuser._id})
       return newuser;
    } catch (error) {
        console.log("Error while creating user","=>",error);
        throw new Error("Something went wrong");
    }
}

export const deleteUser=()=>{
   
}

export const updateUser=()=>{

}

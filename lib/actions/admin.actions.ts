'use server'

import { redirect } from "next/navigation";

export const adminlogin = async (prevstate:any,formdata:FormData) => {
     const {email,password}=Object.fromEntries(formdata);
     const adminmail=process.env.ADMIN_EMAIL;
     const adminpassword=process.env.ADMIN_PASSWORD;
     if(email===adminmail && password===adminpassword){
        redirect('/admin/dashboard');
     }else{
        return {error:'You are not an admin!'};
     }
  } 
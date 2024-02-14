'use client'
import { Input } from "@/components/ui/input"
import { adminlogin } from "@/lib/actions/admin.actions";
import AdminLoginButton from "./AdminLoginButton";
import { useFormState } from "react-dom";
import { useRef } from "react";


const AdminLoginForm = () => {
    const [prevstate,handler]=useFormState(adminlogin,undefined);
    const formref=useRef<HTMLFormElement | null>(null);
  return (
    <div className=" min-h-[100vh] w-[100vw] flex flex-col justify-center items-center">
     <form ref={formref} action={(formdata:FormData)=>{
         handler(formdata);
         if(formref?.current){
            formref.current.reset();
         }
     }} className=" flex flex-col w-[300px] gap-3 items-center bg-neutral-800 p-4 rounded-md">
         <h1 className=" font-bold">Admin Login</h1>
        <Input required  type="email" placeholder="Email" name="email"  className=" border-none outline-none" />
        <Input required type="password" placeholder="Password" name="password" className=" outline-none" />
        <AdminLoginButton/>
        {
           prevstate &&  prevstate.error && <p className=" text-red-500">{prevstate.error}</p>
        }
     </form>
    </div>
  )
}

export default AdminLoginForm;
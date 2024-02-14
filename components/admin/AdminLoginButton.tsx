'use client'

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { ThreeDots } from "react-loader-spinner";


const AdminLoginButton = () => {
    const {pending}=useFormStatus();
  return (
    <Button aria-disabled={pending} className=" w-full" type="submit">
        {
            pending ? <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />:'Login'
        }
    </Button>
  )
}

export default AdminLoginButton;
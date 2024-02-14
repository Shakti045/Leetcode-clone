import AdminLoginForm from "@/components/admin/AdminLoginForm"
import { auth } from "@clerk/nextjs"



const Admin = async () => {
  return (
    <div>
        <AdminLoginForm/>
    </div>
  )
}

export default Admin
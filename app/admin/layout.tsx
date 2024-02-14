import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Adminlayout = async({children}:{children:React.ReactNode}) => {
const {sessionClaims}=auth();
const metadata:any=sessionClaims?.metadata;
if(!metadata?.isAdmin){
    redirect('/');
}
  return (
    <div>
         {children}
        <ToastContainer/>
    </div>
  )
}

export default Adminlayout;
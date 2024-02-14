import { getquestionslist } from "@/lib/actions/question.action";
import { QuestionType } from "@/model/question.model";
import Link from "next/link";
import { PiLinkBold } from "react-icons/pi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
import { Separator } from "../ui/separator";

const Questions = async () => {
    const questions=await getquestionslist();
    
  return (
    <div className=" w-full">
        <div className=" flex justify-between w-full text-gray-300  ">
            <div className=" flex gap-10">
                <p>Status</p>
                <p>Title</p>
            </div>
            <div className=" flex  justify-between  w-[40%]">
                <p>Solution</p>
                <p>Acceptance</p>
                <p>Difficulty</p>
            </div>
        </div>
        <Separator className=" mt-3"/>
        <ul className=" mt-4">
        {
            questions.map((qsn:QuestionType,index)=>{
                return <li className={`flex justify-between w-full p-4  items-center ${index%2==0 && ' bg-neutral-800'}`} key={qsn._id.toString()}>
                     <div className=" flex gap-10 w-[60%] items-center">
                     <IoCheckmarkDoneCircleOutline  className=" text-green-600" />
                     <Link  prefetch={false} className=" hover:text-blue-900" href={`/problem/${qsn._id}`}>{qsn.title}</Link>
                     </div>
                     <div className=" flex  justify-between  w-[40%]">
                            <Link  prefetch={false} href={`/problem/${qsn._id}/solution`}>
                                <PiLinkBold  color={`RGB(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`}/>
                            </Link>
     
                            <p>{qsn.acceptancerate}%</p>
                  
                            <p className={` w-[60px] ${qsn.level=='Easy'?" text-green-600":qsn.level=='Medium'?'text-yellow-500':'text-red-600'}`}>{qsn.level}</p>
                     </div>
                </li>
            })
        }
    </ul>
    </div>
  )
}

export default Questions
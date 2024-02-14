import Image from "next/image"
import NavUser from "../shared/NavUser"
import { Button } from "../ui/button"
import { IoIosMenu } from "react-icons/io";
import { GrFormNext ,GrFormPrevious  } from "react-icons/gr";
import Link from "next/link";

const ProblemNvBar = () => {
  return (
    <div className=" h-12  w-full p-4 flex justify-between items-center">
      <Image src="/logo.png"  height={100} width={100} alt="logo"/>
      <div className=" flex gap-3">
        <div className=" p-2 rounded-md   bg-neutral-900 ">
            <GrFormPrevious  size={20}/>
        </div>
        <Link className=" flex items-center gap-2" href="/problems">
            <IoIosMenu/>
            <p>Problems List</p>
        </Link>
        <div className=" p-2 rounded-md  bg-neutral-900 ">
            <GrFormNext size={20}/>
        </div>
      </div>
      <div>
        <NavUser/>
      </div>
    </div>
  )
}

export default ProblemNvBar
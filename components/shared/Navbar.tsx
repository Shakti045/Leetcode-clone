import { navlinks } from "@/utils/constants"
import Image from "next/image"
import Link from "next/link"
import NavUser from "./NavUser"

const Navbar = () => {
  return (
    <div className=" flex w-full p-2  justify-between items-center bg-neutral-900 border-b-2 ">
      <div className=" flex gap-4 items-center">
          <Link href="/">
            <Image src="/favicon.png" alt="Logo" height={30} width={30}/>
        </Link>
        <ul className=" mt-2 flex gap-4">
          {
            navlinks.map((link)=>{
              return <li key={link.label} className=" hover:text-yellow-500">
                <Link href={link.path}>{link.label}</Link>
              </li>
            })
          }
        </ul>
       </div>
      <NavUser/>
    </div>
  )
}

export default Navbar
import { navlinks } from "@/utils/constants"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import SignedInNavItems from "./SignedInNavItems"

const Navbar = () => {
  return (
    <div className=" flex w-full p-2  justify-between items-center bg-neutral-900 border-b-2 ">
      <div className=" flex gap-4 items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" height={50} width={50}/>
        </Link>
        <ul className=" flex gap-4">
          {
            navlinks.map((link)=>{
              return <li key={link.label} className=" hover:text-yellow-500">
                <Link href={link.path}>{link.label}</Link>
              </li>
            })
          }
        </ul>
       </div>
       <SignedOut>
         <div className=" flex gap-2 items-center">
           <Link href="/sign-in">
           <Button>Sign In</Button>
           </Link>
           <Link href="/sign-up">
           <Button>Sign Up</Button>
           </Link>
         </div>
       </SignedOut>
       <SignedIn>
         <SignedInNavItems/>
       </SignedIn>
    </div>
  )
}

export default Navbar
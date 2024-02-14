import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import SignedInNavItems from './SignedInNavItems'

const NavUser = () => {
  return (
     <>
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
     </>
  )
}

export default NavUser
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const SignedInNavItems = () => {
  return (
    <div className=' flex gap-4 items-center'>
        <div className=' flex items-center gap-2'>
            <Image src="/leetcoins.svg" alt='Leetcoin Image' height={20} width={20}/>
            <p>10</p>
        </div>
        <UserButton afterSignOutUrl='/'/>
        <Button>Premium</Button>
    </div>
  )
}

export default SignedInNavItems
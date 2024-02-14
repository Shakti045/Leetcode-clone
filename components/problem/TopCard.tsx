import { cardimages } from '@/utils/constants'
import Image from 'next/image';
import React from 'react'

const TopCard = () => {
  return (
    <div className=' w-full flex gap-4'>
        {
            cardimages.map((path,index)=>(
                <div key={index} className=' w-[33%]  h-[150px] relative '>
                      <Image key={index} className=' rounded-lg' src={path} alt="Cardimage" fill />
                </div>
            ))
        }
    </div>
  )
}

export default TopCard;
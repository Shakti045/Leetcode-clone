'use client'
import Split from "react-split";
import ProblemDescription from '@/components/problem/ProblemDescription';
import dynamic from 'next/dynamic';
import { QuestionType } from '@/model/question.model';
const PlayGround=dynamic(()=>import('@/components/problem/PlayGround'),{ssr:false});



const Code = ({problem}:{problem:QuestionType}) => {
  return (
     <Split className='split h-[calc(100vh-3rem)] overflow-y-hidden' sizes={[40,60]} minSize={0}>
     <ProblemDescription  question={problem} />
      <div className=' bg-neutral-800 h-full '>
      <PlayGround  />
     </div>
    </Split>

  )
}

export default Code;
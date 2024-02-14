import Code from '@/components/problem/Code'
import { getquestion } from '@/lib/actions/question.action';
import React from 'react'

const Problem = async ({params}:{params:{problemId:string}}) => {
  const problemId=params.problemId;
  const problem=await getquestion(problemId);
  if(!problem){
    return <div>Problem not found</div>
  }
  return (
      <Code  problem={problem} />
  )
}

export default Problem
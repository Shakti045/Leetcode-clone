import React from 'react'
import { exampleTestCase } from './Example'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const Oldtestcases = ({input,output,explanation}:exampleTestCase) => {
  return (
    <div>
            <div className=' flex  gap-2'>
           <Input aria-disabled name='input'  type='text' value={input} placeholder='Input'/>
           <Input aria-disabled name='output'   type='text' value={output} placeholder='Output'/>
        </div>
       
            <Textarea  aria-disabled name='explanation'   value={explanation} placeholder='Explanation'/>
          </div>
  )
}

export default Oldtestcases
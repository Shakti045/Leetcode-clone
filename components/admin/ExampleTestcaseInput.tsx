import React from 'react'
import { exampleTestCase } from './Example'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import ImageInput from '../shared/ImageInput'
import { Button } from '../ui/button'
import Oldtestcases from './Oldtestcases'
type ExampleTestcaseInputProps={
    values:Array<exampleTestCase>,
    handleadd:(newexample:exampleTestCase)=>void
    }
const ExampleTestcaseInput = ({values,handleadd}:ExampleTestcaseInputProps) => {
    const [tsetcase,settestcase] = React.useState({
        input:'',
        output:'',
        explanation:'',
        images:[]
    } as exampleTestCase);
     const handleChange = (e:any)=>{
       settestcase({  ...tsetcase,[e.target.name]:e.target.value})
     }
  return (
    <div className=' flex flex-col gap-4'>
      {
        values?.map((exampletestase:exampleTestCase,index)=>{
          return <Oldtestcases key={index} {...exampletestase}/>
        })
      }
       <h1 className=''>Add Example Testcase</h1>
        <div className=' flex  gap-2'>
           <Input name='input' onChange={handleChange} type='text' value={tsetcase.input} placeholder='Input'/>
           <Input name='output' onChange={handleChange}  type='text' value={tsetcase.output} placeholder='Output'/>
        </div>
       
            <Textarea name='explanation' onChange={handleChange}  rows={7} value={tsetcase.explanation} placeholder='Explanation'/>
           <div className=' flex justify-between'>
           <ImageInput handleImageChange={(newimg:string)=>settestcase({
                ...tsetcase,
                images:[...tsetcase.images,newimg]
            })} images={tsetcase.images}/>
            <Button onClick={()=>
              {
                handleadd(tsetcase),
                settestcase({
                  input:'',
                  output:'',
                  explanation:'',
                  images:[]
              });
               
              }
            } className =' w-fit text-sm ' type='button'>Add Example</Button>
           </div>
      
    </div>
  )
}

export default ExampleTestcaseInput
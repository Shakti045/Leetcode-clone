'use client'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import ExampleTestcaseInput from "./ExampleTestcaseInput"
export type exampleTestCase = {
    input:string,
    output:string,
    explanation:string,
    images:string[]
}
const Example = ({form}:any) => {
  return (
    <div className=" mt-4 flex flex-col ga-3">
      <div>
      </div> 
    <FormField
       control={form.control}
        name="examples"
        render={({ field }) => (
      <FormItem>
        
        <FormControl>
          <ExampleTestcaseInput values={field.value} handleadd={(newexample:exampleTestCase)=>{
            field.onChange([...field.value,{...newexample}])
          }}/>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    </div>
  )
}

export default Example
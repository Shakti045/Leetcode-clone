'use client'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import ArrayInput from "./ArrayInput"

const ExtraInformation = ({form}:any) => {
  return (
    <div className=" flex flex-col gap-4 mt-4">
  <FormField
    control={form.control}
    name="constraints"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Constraints</FormLabel>
        <FormControl>
          <ArrayInput type="Constraints" values={field.value} handleadd={(newconstraint:string)=>{
            form.setValue('constraints', [...field.value, newconstraint]);
          }}/>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />


<FormField
    control={form.control}
    name="hints"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Hints</FormLabel>
        <FormControl>
          <ArrayInput type="Hints" values={field.value} handleadd={(newconstraint:string)=>{
            form.setValue('hints', [...field.value, newconstraint]);
          }}/>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />


<FormField
    control={form.control}
    name="companies"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Companies</FormLabel>
        <FormControl>
          <ArrayInput type="Companies" values={field.value} handleadd={(newconstraint:string)=>{
            form.setValue('companies', [...field.value, newconstraint]);
          }}/>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    </div>
  )
}

export default ExtraInformation
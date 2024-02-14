'use client'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import ImageInput from "../shared/ImageInput"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"


const AboutQuestion = ({form}:any) => {
    const handleImageChange=(url:string)=>{
        form.setValue('images', [...form.getValues('images'), url]);
      }
  return (
    <div className=" flex flex-col gap-4 mt-4">
         <FormField
    control={form.control}
    name="title"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Question title</FormLabel>
        <FormControl>
          <Input placeholder="Write question title" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />



  <Select onValueChange={(value)=>{
    form.setValue('level',value)
  }}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Label" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Easy">Easy</SelectItem>
    <SelectItem value="Medium">Medium</SelectItem>
    <SelectItem value="Hard">Hard</SelectItem>
  </SelectContent>
  </Select>

  <FormField
    control={form.control}
    name="description"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Question description</FormLabel>
        <FormControl>
          <Textarea rows={10} placeholder="Write brieft description of question" {...field}/>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
   <FormField
    control={form.control}
    name="images"
    render={({ field }) => (
      <FormItem className=" flex flex-col gap-2 items-start">
        <FormLabel>Images for description (optional)</FormLabel>
        <FormControl>
          <ImageInput handleImageChange={handleImageChange} images={field.value} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    </div>
  )
}

export default AboutQuestion
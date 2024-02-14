"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import AboutQuestion from "./AboutQuestion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ExtraInformation from "./ExtraInformation"
import Example from "./Example"
import { toast } from "react-toastify"
import { createquestion } from "@/lib/actions/question.action"



const formSchema = z.object({
    title: z.string().min(5, { message: "Title is too short" }),
    description: z.string().min(10, { message: "Description is too short" }),
    images: z.array(z.string()),
    examples: z.array(z.object({explanation: z.string(), input: z.string(), output: z.string(), images: z.array(z.string())})),
    constraints: z.array(z.string()),
    hints: z.array(z.string()),
    companies: z.array(z.string()),
    level: z.string(),
})



export default function QuestionCreateForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            images: [],
            examples: [],
            constraints: [],
            hints: [],
            companies: [],
            level:"easy"
        },
      })
     
      async function onSubmit(values: z.infer<typeof formSchema>) {
        const loadingtoast=toast.loading("Creating question",{theme:'dark'})
           try {
             const isSuccess=await createquestion(values);
             if(isSuccess){
              toast.success("Question created");
              form.reset();
             }else{
              throw new Error("Something went wrong")
             }
           } catch (error) {
              toast.error("Something went wrong",{theme:'dark'});
           }finally{
            toast.dismiss(loadingtoast);
           }
      }



  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

         <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
             <AccordionTrigger className=" bg-neutral-800  text-center p-4 rounded-md">
              Question Description</AccordionTrigger>
              <AccordionContent>
                   <AboutQuestion form={form}/>
                </AccordionContent>
               </AccordionItem>
           </Accordion>


           <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
             <AccordionTrigger className=" bg-neutral-800  text-center p-4 rounded-md">
              Example Testcases</AccordionTrigger>
              <AccordionContent>
                   <Example form={form}/>
                </AccordionContent>
               </AccordionItem>
           </Accordion>
          
           <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
             <AccordionTrigger className=" bg-neutral-800  text-center p-4 rounded-md">
              Extra Informations</AccordionTrigger>
              <AccordionContent>
                   <ExtraInformation form={form}/>
                </AccordionContent>
               </AccordionItem>
           </Accordion>


        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

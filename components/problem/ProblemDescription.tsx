import { QuestionType } from "@/model/question.model"
import { MdDescription } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { TbArrowBackUpDouble } from "react-icons/tb";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ProblemDescription = ({question}:{question:QuestionType | any}) => {

  return (
   
     <div  className=" bg-neutral-800 w-[40%]    rounded-md">
        <div className=" flex items-center gap-4  p-4 bg-neutral-700 rounded-t-md">
             <p className=" flex gap-2 items-center"><MdDescription className=" text-blue-700"/> Description |</p>
             <p className=" flex gap-2 items-center"><AiOutlineSolution className="  text-green-700"/> Solutions |</p>
             <p className=" flex gap-2 items-center"><TbArrowBackUpDouble className=" text-pink-700"/> Submissions</p>
        </div>
        <div className=" w-full h-full overflow-y-scroll  p-4 flex flex-col gap-4">
            <h1 className= "  text-xl font-bold text-neutral-100">{`${question.question_number} . ${question.title}`}</h1>
            <p className=" text-gray-300 text-sm">{question.description}</p>
            {
             question.images.length>0  && <div>
               {
                question.images.map((img:string,index:number)=>(
                  <div key={index} className=" relative h-60 w-full">
                    <Image src={img} alt="qsnimage" fill objectFit="contain" />
                    </div>))
               }
             </div>
            }
            <div  className=" flex flex-col gap-3">
              {
                question.examples?.map((example:any,index:number)=>(
                  <div key={index} className= " flex flex-col gap-1">
                    <h1 className=" text-neutral-100 font-bold text-lg">Example {index}</h1>
                    <p className=" text-gray-300 text-sm">{example.explanation}</p>
                    <p className=" text-gray-300 text-sm">
                      <span className=" font-bold">Input : </span>{example.input}
                    </p>
                    <p className=" text-gray-300 text-sm">
                      <span className=" font-bold">Output : </span>{example.output}
                    </p>
                  </div>
                ))

              }
            </div>

            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger>
              Companies
              </AccordionTrigger>
              <AccordionContent>
                  <div className=" flex gap-4 flex-wrap">
                  {
                      question.companies?.map((company:string,index:number)=>(
                        <p key={index} className=" p-2 rounded-md bg-yellow-600 ">{company}</p>
                      ))
                   }
                  </div>
                </AccordionContent>
               </AccordionItem>
           </Accordion>
           <div>
              <h1 className=" text-neutral-100 font-bold text-lg">Constraints</h1>
              <div className="   flex flex-col gap-2">
                    {
                        question.constraints?.map((constraint:string,index:number)=>(
                          <p key={index} className=" opacity-40 ">{constraint}</p>
                        ))
                    }
                    </div>
           </div>
          </div>
        </div>
     
   
  )
}

export default ProblemDescription;
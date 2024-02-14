'use client'
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark  } from "@uiw/codemirror-theme-vscode";
import { RiSettings4Fill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import {javascript} from '@codemirror/lang-javascript'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
import { useState } from "react";
import { Button } from "../ui/button";
import { initialcodes } from "@/utils/constants";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/uswWindowSize";
import { toast } from "react-toastify";
import { runcodeinjudge } from "@/lib/actions/question.action";
import {  ColorRing } from "react-loader-spinner";
  

const PlayGround = () => {
    const [language, setLanguage] = useState<string>("Java");
    const [userCode, setUserCode] = useState(initialcodes[language as keyof typeof initialcodes]);
    const [success,setSuccess]=useState<boolean>(false);
    const [fontsize,setfontsize]=useState<number>(15);
    const { width, height } = useWindowSize(); 
    const [running,setRunning]=useState<boolean>(false);

    const runCode=async()=>{
      
      setRunning(true);
      try {
        const succees=await runcodeinjudge(userCode,language,"");
        if(succees){
          toast.dark('ACCEPTED',{position:'bottom-right'});
          setSuccess(true);
          setTimeout(()=>{
            setSuccess(false);
          },5000);
        }
      } catch (error) {
        toast.dark('Something went wrong',{position:'bottom-right'});
      }finally{
        setRunning(false);
      }
    };
    const submitCode=()=>{};

  return (
       <div className=" h-full flex flex-col ">
          <div className=" flex items-center justify-between gap-2
         p-2 bg-neutral-700 rounded-t-md ">
        <div className="flex items-center gap-2">
              <FaCode className=" text-green-700 " />
              <p>Code</p>
         </div>
         <div className=" flex items-center gap-3">
         <Select value={language} onValueChange={(value)=>{
          setLanguage(value);
          setUserCode(initialcodes[value as keyof typeof initialcodes]);
         }}>
             <SelectTrigger  className="w-[180px]">
              <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Java">Java</SelectItem>
               <SelectItem value="C++">C++</SelectItem>
               <SelectItem value="Javascript">Javascript</SelectItem>
               <SelectItem value="Python">Python</SelectItem>
                </SelectContent>
         </Select>
         <AlertDialog>
            <AlertDialogTrigger>
            <Button><RiSettings4Fill className=" text-green-800 " /> </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Select font size</AlertDialogTitle>
                <AlertDialogDescription className=" flex gap-4 flex-wrap">
                 {
                  Array(10).fill(null).map((_,index)=>(
                    <Button key={index} onClick={()=>setfontsize(15+index)}>{15+index}</Button>))
                 }
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
         
         </div>
          </div>
          <div className=" flex-1 overflow-y-scroll ">
          <CodeMirror
						value={userCode}
						theme={vscodeDark}
            extensions={[javascript()]}
						style={{ fontSize: fontsize }}
            onChange={(value) => setUserCode(value)}
					/>
          </div>
          <div className=" w-full flex justify-end  bg-neutral-700 p-3 ">
          <div className=" flex gap-2">
          <Button className=" " disabled={running} onClick={runCode}>
            {
              running? <ColorRing
              visible={true}
              height="60"
              width="60"
              ariaLabel="color-ring-loading"
              wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />:'Run'
            }
            </Button>
          <Button disabled={running} onClick={submitCode}>Submit</Button>
          </div>
          </div>
          {
            success && <Confetti gravity={0.3} tweenDuration={4000} width={width-1} height={height-1} />
          }
       </div>
  )
}

export default PlayGround
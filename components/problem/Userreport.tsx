import CircularProgressBar from "./CricularProgressbar"

  

const Userreport = () => {
    
  return (
     <div className="  gap-5 flex items-center  p-4 bg-neutral-800 rounded-md">
        <CircularProgressBar radius={60} strokeWidth={10} progress={0.75}/>
       <div className=" w-[50%] flex  justify-between">
       <div className=" flex flex-col gap-2">
            <p  className="text-green-600">Easy</p>
            <p className="text-yellow-500">Medium</p>
            <p className="text-red-600">Hard</p>
        </div>
        <div className=" flex flex-col gap-2">
            <p>20/200</p>
            <p>30/345</p>
            <p>40/45</p>
            </div>
       </div>
     </div>
  )
}

export default Userreport
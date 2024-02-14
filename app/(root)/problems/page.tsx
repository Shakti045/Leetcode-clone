import PotdCalender from "@/components/problem/PotdCalender"
import Questions from "@/components/problem/Questions"
import TopCard from "@/components/problem/TopCard"
import Userreport from "@/components/problem/Userreport"

const Problems = () => {
  return (
    <div className=" w-full  p-12 flex gap-5">
        <div className=" w-[70%] flex flex-col gap-4">
        <TopCard/>
        <Questions/>
        </div>
        <div className=" w-[30%] flex flex-col gap-4">
          <PotdCalender/>
          <Userreport/>
        </div>
    </div>
  )
}

export default Problems
const PotdCalender = () => {
const currentDate = new Date();
const today= currentDate.getDate();
const todayinstring = currentDate.toLocaleString('default', {day:'2-digit', month: 'long',year:'numeric' });
const nextMonth:any = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDayOfMonth:any = new Date(nextMonth - 1);
const numberOfDaysInMonth = lastDayOfMonth.getDate();
currentDate.setDate(1); 
const startingDayOfMonth = currentDate.getDay();


  return (
    <div className=' w-full bg-neutral-800 p-4 rounded-md flex flex-col   gap-3'>
        <p>
            { `  ${todayinstring}`}
        </p>
        <div className='   grid grid-cols-7 justify-between  '>
            <p className='text-center p-2 rounded-full'>S</p>
            <p className='text-center p-2 rounded-full'>M</p>
            <p className='text-center p-2 rounded-full'>T</p>
            <p className='text-center p-2 rounded-full'>W</p>
            <p className='text-center p-2 rounded-full'>T</p>
            <p className='text-center p-2 rounded-full'>F</p>
            <p className='text-center p-2 rounded-full'>S</p>
        </div>
      <div className='  grid grid-cols-7 justify-between gap-y-2'>
      {
            Array(startingDayOfMonth).fill(-1).map((_,index)=>{
                return <div key={index}></div>
            })
        }
        {
            Array(numberOfDaysInMonth).fill(-1).map((_,index)=>{
                return <div className={` text-center p-2 rounded-full ${today===index+1 && ' bg-green-600'}`} key={index}>{index+1}</div>
            })
        }
      </div>
    </div>
  )
}

export default PotdCalender
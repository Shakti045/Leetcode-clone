import React from 'react'
type ArrayInputProps={
    type:string,
    values:Array<string>,
    handleadd:(newvalue:string)=>void
    }

const ArrayInput = ({type,values,handleadd}:ArrayInputProps) => {
  const [value, setvalue] = React.useState('' as string);
  return (
    <div className=' flex flex-col gap-4'>
        <div className=' flex gap-2'>
        <input value={value} onChange={(e)=>setvalue(e.target.value)} type="text" placeholder={`Add ${type}`} className=' px-4 py-2 bg-amber-50 rounded-md    text-black ' onKeyDown={(e)=>{
            if(e.key==='Enter'){
                if(value.trim()==='' || value.trim()===null) return;
                handleadd(value);
                setvalue('');
            }
        }}/>
        <button type="button" className=' px-4 py-2 bg-amber-50 rounded-md   text-black ' onClick={()=>{
            if(value.trim()==='' || value.trim()===null) return;
            handleadd(value);
            setvalue('');
        }}>Add</button>
        </div>
       
        {
            type==='Constraints' && <div className=' bg-neutral-800 p-4 rounded-md  flex flex-col gap-2'>
            {values.map((value,index)=><p key={index} className='p-2  rounded-md '>{value}</p>)}
            </div>
        }
        {
            type==='Hints' && <div className=' bg-neutral-800 p-4 rounded-md  flex flex-col gap-2'>
            {values.map((value,index)=> <div key={index} className=' border-b-[1px] border-gray-400 pb-2'>
                <p  className=' text-lg font-bold'>{`Hint no ${index+1}`}</p>
                <p>{value}</p>
            </div> )}
            </div>
        }
        {
            type==='Companies' && <div className=' bg-neutral-800 p-4 rounded-md  flex  flex-wrap gap-2'>
            {values.map((value,index)=><p key={index} className='p-2 bg-yellow-500 rounded-lg w-fit '>{value}</p>)}
            </div>
        }
       
    </div>
  )
}

export default ArrayInput
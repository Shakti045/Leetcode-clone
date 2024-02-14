'use client'
import { CldUploadWidget,CldUploadWidgetResults } from 'next-cloudinary';
import Image from 'next/image';

import React from 'react'
 type imageinputpropstype={
    handleImageChange:(string:string)=>void,
    images:Array<string>
}
export const ImageInput = ({handleImageChange,images}:imageinputpropstype) => {
    
    const handleuplaod=(result:CldUploadWidgetResults)=>{
        const info:any=result?.info;
        if(!info) return;
        const url:any=info?.secure_url;
        handleImageChange(url);
    }
  return (
        <div className=' flex flex-col gap-3'>
        {
          images.length>0 &&  <div className=' bg-neutral-800 p-4 rounded-md grid grid-cols-3'>
          {images.map((image,index)=><Image key={index} src={image} alt="question image" height={400} width={400}/>)}
          </div>
        }
         <CldUploadWidget onUpload={(result)=>{handleuplaod(result)}} uploadPreset='rfahuwwl'>
          
          {({ open }) => {
            const onClick = () => {
              open();
            };
  
            return (
              <button 
                type="button" 
                
                onClick={onClick}
              >
               <p className=' w-fit px-4 py-2 bg-amber-50 rounded-md   text-black '>Add Image</p>
              </button>
            );
          }}
  
        </CldUploadWidget>
        </div>
  )
}

export default ImageInput
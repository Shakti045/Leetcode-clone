'use client'
import { Audio } from "react-loader-spinner"


const loading = () => {
  return (
    <div className=" h-[100vh] w-[100vw] flex justify-center items-center ">
        <Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
  />
    </div>
  )
}

export default loading
import ProblemNvBar from '@/components/problem/ProblemNvBar'
import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProblemLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <ProblemNvBar/>
        {children}
        <ToastContainer/>
    </div>
  )
}

export default ProblemLayout
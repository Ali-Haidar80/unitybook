import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Rightbar = () => {
  return (
    <div className='w-[25%] h-full py-4 -z-10 hidden md:block'>
        <h2 className='text-slate-600 text-lg ml-3 font-medium'>Group conversations</h2>
        
        <div className="flex items-center mt-2 gap-2 hover:bg-[#e1e4e4] py-2 px-3 rounded-lg cursor-pointer" >
        <div className={`bg-[#d8dada] cursor-pointer p-2 rounded-full inline-block`}>
            <FaPlus className="text-sm" />
          </div>
            <p>Create New Group</p>
        </div>
        
    </div>
  )
}

export default Rightbar
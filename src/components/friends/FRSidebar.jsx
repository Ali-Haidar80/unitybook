import React from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FRSidebar = () => {
    const navigate = useNavigate()
  return (
    <div className='p-3'>
        <div className='py-2 flex items-center gap-4'>
        <span onClick={()=>navigate(-1)} className='cursor-pointer hover:bg-gray-300 p-2 rounded-full'><HiOutlineArrowLeft/></span>
        <div className='text-sm'>
        <p onClick={()=>navigate('/friends')} className='hover:underline cursor-pointer inline-block'>Friends</p>
        <h1 className='text-2xl font-bold'>Friends Requests</h1>
        </div>
    </div>
    <hr className='mb-2 h-[1px] bg-[#dbdbdb] border-0' />
    <div className=''>
        <h1 className='text-md font-medium'>1 Friend Request</h1>
        <p className=' cursor-pointer inline-block text-xs text-[#58ce62]'>View sent requests</p>
        <Link>
        <div className='flex gap-4 my-3 hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 rounded-md p-2'>
            <img src="/img/images1.jpg" className='w-[60px] h-[60px] rounded-[100%]' alt="" />
            <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-md font-medium capitalize'>Otis mellb</h1>
                    <small>1w</small>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-[#52df8a] text-center w-32 py-[0.41rem] rounded-md text-white font-semibold'>Confirm</button>
                    <button className='bg-[#e9e8e8] text-center w-32 py-[0.41rem] rounded-md text-black font-semibold'>Delete</button>
                </div>
            </div>
        </div>
        </Link>
    </div>
    </div>
  )
}
export default FRSidebar
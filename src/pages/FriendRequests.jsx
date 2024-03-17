import React from 'react'
import Profile from './Profile'
import FRSidebar from '../components/friends/FRSidebar'
const FriendRequests = () => {
  return (
    <div className='flex h-[90%]'>
    <div className="!w-[80%] h-[100%] bg-white shadow-lg">
    <FRSidebar />
    </div>
    <div className='h-[100%] scrollview overflow-y-auto px-6 py-3'>
      {/* <h1 className='text-xl font-bold capitalize mb-4'>People You may know</h1> */}
      <Profile/>
    </div>
  </div>
  )
}

export default FriendRequests
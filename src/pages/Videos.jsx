import React from 'react'
import VideoCard from '../components/common/videoCard'
import VideoSideBar from '../components/common/VideoCard/VideoSideBar'

const Videos = () => {
  return (
    <div className='flex md:flex-row flex-col h-[90%]'>
       <div className="md:!w-[30%] w-[100%] md:h-[100%] bg-white shadow-lg">
        <VideoSideBar /> 
        </div>
          
        <div className='h-[100%] scrollview overflow-y-auto'>
      <VideoCard/>
        </div>
    </div>
  )
}

export default Videos
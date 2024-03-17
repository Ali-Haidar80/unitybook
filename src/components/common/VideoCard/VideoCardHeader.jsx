import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
const VideoCardHeader = ({userImg,user,time}) => {
  return (
    <div className="heder mx-4 flex justify-between">
            <div className="logo flex items-center gap-2">
              <img
                src={userImg}
                className="w-10 h-10 rounded-full"
                alt="user_dp"
              />
              <div>
                <h2 className="capitalize font-medium">{user}</h2>
                <p className="text-gray-400 text-sm">{time}</p>
              </div>
            </div>
              <BsThreeDots className="cursor-pointer text-[1.62rem] text-gray-500" />
            {/* <div className="action flex items-center text-[1.62rem] text-gray-500 gap-2">
              <IoClose className="cursor-pointer" />
            </div> */}
          </div>
  )
}

export default VideoCardHeader
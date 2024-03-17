import React from 'react'
import { GoThumbsup } from "react-icons/go";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import PostBtn from '../postBtn';

const VideoCardActions = () => {
  return (
    <div className="flex justify-between items-center mx-4">
            <div className="flex gap-4">
              <PostBtn
                btnTitle={"Like"}
                icon={<GoThumbsup className="text-gray-500 text-xl" />}
              />
              <PostBtn
                btnTitle={"Comment"}
                icon={<LuMessagesSquare className="text-gray-500 text-xl" />}
              />
              <PostBtn
                btnTitle={"Share"}
                icon={
                  <FaRegShareFromSquare className="text-gray-500 text-xl" />
                }
              />
            </div>
            <div className="flex gap-4 text-slate-600 text-xs sm:text-sm">
              <p className="">31k Likes</p>
              <p className="">200 Comments</p>
              <p className="">1.2M Views</p>
            </div>
          </div>
  )
}

export default VideoCardActions
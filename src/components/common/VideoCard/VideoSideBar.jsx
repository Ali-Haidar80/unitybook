import React from "react";
import { HiUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { BiSolidMoviePlay } from "react-icons/bi";
import { PiBookmarkSimpleFill } from "react-icons/pi";

const VideoSideBar = () => {
    return (
        <div className="flex md:flex-col py-2 px-3 w-full">
          <h1 className="text-2xl font-bold cursor-pointer">Video</h1>
          <div className="flex md:flex-col md:my-6 text-lg font-semibold  text-gray-900">
            <div className="md:flex block md:items-center md:gap-2 md:w-full bg-[#ebeeee] md:py-3 md:px-2 rounded-md cursor-pointer">
              <span className="bg-[#00bf63] p-2 rounded-full hidden md:block">
                <HiUsers className="text-white " />
              </span>
              <Link className="">Home</Link>
            </div>
            <Link to={"/videos/reels"}>
          
              <div className="flex items-center relative gap-2 w-full hover:bg-[#ebeeee] py-3 px-2 rounded-md cursor-pointer">
                <span className="bg-slate-300 p-2 rounded-full">
                  <BiSolidMoviePlay  className="text-black" />
                </span>
                Reels
                <FaChevronRight className="absolute right-1 text-gray-500" />
              </div>
            </Link>
            <Link to={""}>
              <div className="flex items-center relative gap-2 w-full hover:bg-[#ebeeee] py-3 px-2 rounded-md cursor-pointer">
                <span className="bg-slate-300 p-2 rounded-full">
                  <PiBookmarkSimpleFill className="text-black" />
                </span>
                Saved Videos
                <FaChevronRight className="absolute right-1 text-gray-500" />
              </div>
            </Link>
          </div>
        </div>
      );
}
export default VideoSideBar
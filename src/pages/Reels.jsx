import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import {
  BiSolidMoviePlay,
  BiChevronRight,
  BiChevronLeft,
  BiSolidLike,
  BiSolidMessageRounded,
} from "react-icons/bi";
import { reels } from "../lib/data";
import ReactPlayer from "react-player";
import { FaShare } from "react-icons/fa6";

const Reels = ({ Hide }) => {
  Hide(1);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  function farword() {
    if (count !== reels.length - 1) setCount(count + 1);
    else {
      setCount(0);
    }
  }
  function Previous() {
    if (count > 0) setCount(count - 1);
    else {
      setCount(reels.length - 1);
    }
  }

  return (
    <div className="bg-black custHeight">
      <div className="py-3 px-4 flex justify-between text-white">
        <div className="flex items-center gap-4 text-2xl font-semibold">
          <IoClose
            className="cursor-pointer"
            onClick={() => navigate("/videos")}
          />
          <img
            onClick={() => navigate("/")}
            src="/U.png"
            alt="logo"
            className="w-10 h-10 rounded-full "
          />
          <p>Reels</p>
        </div>
        <button className="bg-white flex items-center text-sm font-medium text-[#64666A] gap-1 px-3 py-1 rounded-full">
          <BiSolidMoviePlay className="text-xl" /> Create Reel
        </button>
      </div>
      <div className="carousel flex justify-center items-center gap-2 w-[100%] h-[90%]">
        <button
          className="bg-gray-200 inline-block p-1 rounded-full"
          onClick={Previous}
        >
          <BiChevronLeft className="text-4xl" />
        </button>
        <ReactPlayer
          className="relative !w-[20%] !h-[80%]"
          playing
          loop
          volume={0.08}
          url={reels[count].video}
        />
        <button
          className="bg-gray-200 inline-block p-1 rounded-full"
          onClick={farword}
        >
          <BiChevronRight className="text-4xl" />
        </button>
      </div>
      <div className="absolute bottom-10 right-10 text-white gap-3 flex items-center justify-between flex-col">
        <div className="flex flex-col items-center ">
          <button className="bg-gray-800 shadow-md p-2 text-white rounded-full text-2xl">
            <BiSolidLike className="" />
          </button>
          <p className="text-sm font-medium">2.1k</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-gray-800 shadow-md p-2 text-white rounded-full text-2xl">
            <BiSolidMessageRounded className="" />
          </button>
          <p className="text-sm font-medium">1</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-gray-800 shadow-md p-2 text-white rounded-full text-2xl">
            <FaShare className="" />
          </button>
          <p className="text-sm font-medium">109</p>
        </div>
      </div>
    </div>
  );
};

export default Reels;

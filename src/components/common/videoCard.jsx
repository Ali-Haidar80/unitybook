import React from "react";

import { videoPosts } from "../../lib/data";
import ReactPlayer from "react-player";
import VideoCardHeader from "./VideoCard/VideoCardHeader";
import VideoCardActions from "./VideoCard/VideoCardActions";


const VideoCard = () => {
  return (
    <div className="flex flex-col w-[80%] mx-auto">
     
      {videoPosts.map((item, idx) => (
        <div
          key={idx}
          className=" bg-white mt-6 rounded-md py-2 w-[100%] shadow-md"
        >
         <VideoCardHeader userImg={item.user_img} user={item.user} time={item.time} /> 
          <div className="my-3 px-3">
            <p className="text-gray-600 font-medium leading-5 tracking-normal text-justify mb-2">
              {item.title}
            </p>
            <ReactPlayer light={'https://placekitten.com/800/1400'} className="!w-[100%] !h-[70%]" controls volume={0.5} url={item.video} />
          </div>
          <VideoCardActions/>
        </div>
      ))}
    </div>
  );
};

export default VideoCard;

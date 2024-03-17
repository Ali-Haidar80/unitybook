import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import PostBtn from "./postBtn";
import { GoThumbsup } from "react-icons/go";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { posts } from "../../lib/data";

const PostCard = () => {
  return (
    <>
      {posts.map((item, idx) => (
          
            <div
              key={idx}
              className=" bg-white mt-6 rounded-md py-2 w-[100%] md:w-[70%] shadow-md"
            >
              <div className="heder mx-4 flex justify-between">
                <div className="logo flex items-center gap-2">
                  <img
                    src={item.user_img}
                    className="w-10 h-10 rounded-full"
                    alt="user_dp"
                  />
                  <div>
                    <h2 className="capitalize font-medium">{item.user}</h2>
                    <p className="text-gray-400 text-sm">{item.time}</p>
                  </div>
                </div>
                <div className="action flex items-center text-[1.62rem] text-gray-500 gap-2">
                  <BsThreeDots className="cursor-pointer" />
                  <IoClose className="cursor-pointer" />
                </div>
              </div>
              <div className="content my-3">
                <p className="text-gray-600 px-3 leading-5 tracking-normal text-justify">
                  {item.title}
                </p>
                <img src={item.img} className="h-[50%] w-full my-2" alt="" />
              </div>
              <div className="flex justify-evenly">
                <PostBtn
                  btnTitle={"Like"}
                  icon={<GoThumbsup className="text-gray-500 text-2xl" />}
                />
                <PostBtn
                  btnTitle={"Comment"}
                  icon={<LuMessagesSquare className="text-gray-500 text-2xl" />}
                />
                <PostBtn
                  btnTitle={"Share"}
                  icon={
                    <FaRegShareFromSquare className="text-gray-500 text-2xl" />
                  }
                />
              </div>
            </div>
          
        ))}
    </>
  );
};

export default PostCard;

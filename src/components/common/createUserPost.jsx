import React, { useState } from "react";
import PostBtn from "./postBtn";
import CreatePost from "./CreatePost";
import { postBtns } from "../../lib/data";

const CreateUserPost = () => {
  const [box, setBox] = useState(false);
  return (
    <div className=" bg-white mt-6 rounded-md px-4 py-2 w-[100%] md:w-[70%]  shadow-md ">
      <div className="flex justify-center">
        <img src="/img/images.jpg" alt="" className="w-10 h-10 rounded-full" />
        <button
          className="bg-gray-100 text-left rounded-2xl w-full py-2 px-3 ml-2 cursor-pointer hover:bg-gray-200"
          onClick={() => setBox(true)}
        >
          what's on your mind, Zain
        </button>
      </div>
      <hr className="my-3 h-px bg-[#eeeded] border-0" />
      <div className="flex justify-evenly w-full">
        {postBtns.map((btn, idx) => (
          <PostBtn
            key={idx}
            btnTitle={btn.btnTitle}
            icon={btn.icon}
            index={idx}
          />
        ))}
      </div>
      {box ? <CreatePost sbox={setBox} /> : null}
    </div>
  );
};
export default CreateUserPost;
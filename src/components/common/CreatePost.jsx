import React, { useState } from "react";
import { BiHappy } from "react-icons/bi";
import { MdClose, MdOutlinePhotoLibrary } from "react-icons/md";

const CreatePost = ({ sbox }) => {
  const [postData, setpostData] = useState("");
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-50 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative flex-col transform flex items-center overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="flex justify-between items-center my-2">
                <h1 className="font-bold text-lg">Create post</h1>
                <span
                  onClick={() => sbox(false)}
                  className="absolute right-6 top-2 bg-slate-200 rounded-full p-2 cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
              <hr className="my-3 h-[1px] bg-gray-300 border-0 w-full" />
              <div className="w-[90%] mb-12">
                <textarea
                  onChange={(e) => setpostData(e.target.value)}
                  value={postData}
                  rows={7}
                  type="text"
                  className=" w-full py-2 text-xl outline-none"
                  name="post"
                  placeholder="What's on your mind, Zain?"
                  id=""
                />
              </div>
              <div className="flex w-[95%] justify-between px-4 py-3 border-gray-500 border rounded-md shadow-lg">
                <p>Add to your post</p>
                <div className="flex gap-2">
                  <span className=" hover:bg-gray-100 rounded-full p-1 cursor-pointer">
                    <MdOutlinePhotoLibrary className="text-2xl text-emerald-500 cursor-pointer" />
                  </span>
                  <span className=" hover:bg-gray-100 rounded-full p-1 cursor-pointer">
                    <BiHappy className="text-2xl text-amber-500 cursor-pointer" />
                  </span>
                </div>
              </div>
              <button
                disabled={postData === null || postData === "" ? true : false}
                className={` w-[95%] bg-[#00bf63] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:bg-opacity-75 rounded-md my-4 py-1 text-lg capitalize font-semibold text-white`}
              >
                post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
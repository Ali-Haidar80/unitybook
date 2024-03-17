import React from "react";
import { IoIosCamera } from "react-icons/io";
import CreateUserPost from "../components/common/createUserPost";
import PostCard from "../components/common/postCard";


const Profile = () => {
  return (
    <>
    <div className="bg-white h-[32rem] shadow-sm shadow-[#d3d2d2]">
      <div className="bg-white relative flex flex-col items-center md:items-start">
        <div className="cover relative bg-gradient-to-b from-[#ecf1f1] via-[#d0d4d4] to-[#919292] h-[23rem] rounded-b-md w-full">
          <img src="/img/jjk.jpg" className='h-[23rem] rounded-b-md w-full' alt="" />
          <button className="flex items-center absolute bottom-4 right-6 gap-2 text-white font-medium bg-black bg-opacity-40 py-2 px-2 rounded-md ">
            <IoIosCamera className="text-xl text-white" />
            <p className="hidden sm:block">Add Cover Photo</p>
          </button>
        </div>
          <div className="bg-slate-600 inline-block border-white border-4 h-[180px] w-[180px] md:ml-10 rounded-full mx-2 relative -translate-y-24  ">
            <img src="/img/cre.jpg" className=' h-full w-full rounded-full' alt="" />
            <button className="absolute bottom-2 right-2 font-medium bg-gray-300 py-1 px-1 rounded-full ">
              <IoIosCamera className="text-3xl text-black" />
            </button>
            <div className="absolute text-center text-black ">
              <h1 className="text-3xl font-bold text-center">Zain Zahid</h1>
              <div className="flex gap-2 w-full text-gray-500 font-medium">
                <h2>2 friends</h2>
                <h2>3 following</h2>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row mt-10 px-6 h-[90vh]">
   <div className="w-full md:h-full md:w-[35%] my-5 rounded-md md:overflow-y-auto">
   <div className="w-full bg-white px-4 py-2 rounded-md">
        <h1 className="text-xl font-bold">Intro</h1>
        <button className="bg-gray-200 text-gray-700 w-full my-2 py-1 rounded-md font-medium">Add Bio</button>
        <button className="bg-gray-200 text-gray-700 w-full my-2 py-1 rounded-md font-medium">Edit Details</button>
      </div>
      <div className="w-full bg-white px-4 py-2 rounded-md my-2 flex items-center justify-between">
        <h1 className="text-xl font-bold">Photos</h1>
        <a className="text-green-500 hover:bg-gray-200 py-2 px-3 rounded-md" href="#">See All Photos</a>
      </div>
      <div className="w-full bg-white px-4 py-2 rounded-md my-2 ">
        <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Friends</h1>
        <a className="text-green-500 hover:bg-gray-200 py-2 px-3 rounded-md" href="#">See All Friends</a>
        </div>
        <p className="text-[#64666A]">3 friends</p>
        <div className="flex flex-wrap my-1 gap-2">
          <div>
          <img src="/img/cop.jpg" className="rounded-md w-24 h-24"  alt="" />
          <p className="text-xs">Tasha Carlson</p>
          </div>
          <div>

          <img src="/img/images.jpg" className="rounded-md w-24 h-24"  alt="" />
          <p className="text-xs">Harriet Cohen</p>
          </div>
          <div>
          <img src="/img/images1.jpg" className="rounded-md w-24 h-24"  alt="" />
          <p className="text-xs">Josefina Bradley</p>
          </div>

        </div>
      </div>
   </div>
      
        <div className="w-[10%] lg:w-[60%] md:ml-10 md:overflow-y-auto scrollview">
        <CreateUserPost/>
        <PostCard/>
        </div>
    </div>
      
    </>
  );
};

export default Profile;

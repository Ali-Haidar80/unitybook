import React from "react";
import { HiUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { RiUserSharedFill } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";

const FriendsNavbar = () => {
  return (
    <div className="py-2 px-3 w-full">
      <h1 className="text-2xl font-bold cursor-pointer">Friends</h1>
      <div className="flex flex-col my-6 text-lg font-semibold text-gray-900">
        <div className="flex items-center gap-2 w-full bg-[#ebeeee] py-3 px-2 rounded-md cursor-pointer">
          <span className="bg-[#00bf63] p-2 rounded-full">
            <HiUsers className="text-white" />
          </span>
          <Link>Home</Link>
        </div>
        <Link to={"/friends/requests"}>
          {" "}
          <div className="flex items-center relative gap-2 w-full hover:bg-[#ebeeee] py-3 px-2 rounded-md cursor-pointer">
            <span className="bg-slate-300 p-2 rounded-full">
              <RiUserSharedFill className="text-black" />
            </span>
            Friend Requests
            <FaChevronRight className="absolute right-1 text-gray-500" />
          </div>
        </Link>
        <Link to={""}>
          <div className="flex items-center relative gap-2 w-full hover:bg-[#ebeeee] py-3 px-2 rounded-md cursor-pointer">
            <span className="bg-slate-300 p-2 rounded-full">
              <BiSolidUserDetail className="text-black" />
            </span>
            All Friends
            <FaChevronRight className="absolute right-1 text-gray-500" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FriendsNavbar;

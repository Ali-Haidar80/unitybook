import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PiArrowLeft } from "react-icons/pi";
import {
  RiMessengerFill,
  RiNotification4Fill,
} from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { Expand } from "../assets/icons/index";
import { TopbarMenu } from "../lib/data";

const Header = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const navigate = useNavigate()
  return (
    <>
      <nav className="bg-white p-1 flex flex-col gap-1 xs:flex-row items-center justify-between shadow-gray-300 shadow-sm px-4 sticky top-0 z-10">
        <div className="flex">
        <img onClick={()=>navigate('/')} src="/U.png" alt="logo" className="w-10 h-10 rounded-full " /> 
          <div className="flex  items-center p-3 bg-[#f0f2f5] rounded-full mx-2">
            <FaSearch
              className="text-gray-400 text-lg"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={()=>setToggleSearch(true)}
            />
          
            {toggleSearch ? (
              <div
                className="absolute left-0 -top-[7px] transition-all z-10 mt-2 p-3 w-[25%] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
               <div className="flex items-center mb-2 gap-2">
               <PiArrowLeft onClick={()=>setToggleSearch(0)} className=" text-2xl text-[#64666A]"/>
                <input
              type="text"
              placeholder="Search UnityBook"
              className="outline-none p-2 px-4 bg-[#f0f2f5] w-[100%] px-2 rounded-full mx-2"
            />
               </div>
               <p className="capitalize text-center text-gray-500">no recent searches</p>
              </div>
            ) : null}
          </div>
          <NavLink to={"/bookmarks"} className="py-2 px-2 block md:hidden cursor-pointer">
            <Expand />
          </NavLink>
        </div>
        <div className=" text-2xl items-center hidden md:flex">
         {
          TopbarMenu.map((item,idx)=>(
            <NavLink key={idx} to={item.to} className={`py-3 px-6 ${idx===5?"block lg:hidden":""} lg:px-10 cursor-pointer`}>
            {item.icon}
          </NavLink>
          ))
         }
          
        </div>
        <div className="flex text-2xl">
          <div
            className={` bg-[#ebeeee] hover:bg-[#d8dada]  cursor-pointer rounded-full mx-1`}
          >
            <CgMenuGridO className={`m-2 ${"text-[#1f1d1d]"} rounded-full`} />
          </div>
          <div
            className={`bg-[#ebeeee] hover:bg-[#d8dada] cursor-pointer rounded-full mx-1`}
          >
            <RiMessengerFill className={`m-2 text-[#1f1d1d] rounded-full`} />
          </div>
          <div
            className={`bg-[#ebeeee] hover:bg-[#d8dada] cursor-pointer rounded-full mx-1`}
          >
            <RiNotification4Fill
              className={`m-2 text-[#1f1d1d] rounded-full`}
            />
          </div>
          <div
           
            className={`${
             "bg-[#ebeeee] hover:bg-[#d8dada]"
            }   cursor-pointer rounded-full mx-1`}
          >
            <FaUserCircle
              className={`m-2 ${
                "text-[#00bf63]"
              } rounded-full`}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

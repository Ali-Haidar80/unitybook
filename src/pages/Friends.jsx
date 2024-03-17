import React from "react";
import { useLocation } from "react-router-dom";
import FRCard from "../components/friends/FRCard";
import FriendsNavbar from "../components/friends/FriendsNavbar";


const Friends = () => {
  return (
    <div className="flex h-[90%]">
      <div className="!w-[60%] h-[100%] bg-white shadow-lg">
        <FriendsNavbar />
      </div>
      <div className=" h-[100%] scrollview overflow-y-auto px-6 py-3">
        <h1 className="text-xl font-bold capitalize mb-2">
          People You may know
        </h1>
        <div className="flex flex-wrap gap-3">
          {Array.from({length:9},(item, idx) => {
            return (
              <>
                <FRCard />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Friends;

import React from "react";

const FRCard = () => {
  return (
    <div className="bg-white relative w-[220px] h-[360px] flex flex-col items-center shadow-md rounded-md shadow-gray-300">
      
      <img
        src="/img/images.jpg"
        className="w-[99%] h-[220px] rounded-t-md"
        alt="user_dp"
      />
      <h3 className=" absolute left-4 top-[225px] capitalize text-md font-semibold">
        meave welly
      </h3>
      <div className="mt-14 flex flex-col gap-1">
        <button className="text-[#00bf63] font-medium bg-green-100 px-14 py-[0.4rem] rounded-md">
          Add Friend
        </button>
        <button className="text-gray-900 font-medium bg-gray-200 px-14 py-[0.4rem] rounded-md">
          Remove
        </button>
      </div>
    </div>
  );
};

export default FRCard;

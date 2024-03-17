import React from "react";

const PostBtn = ({ btnTitle, icon, index }) => {
  return (
    <div
      className={`flex items-center gap-1 py-2 cursor-pointer ${
        index === 2 ? "hidden xs:flex " : ""
      } rounded-md hover:bg-gray-100`}
    >
      {icon}
      <h3 className="font-medium text-slate-600 text-sm sm:text-md">
        {btnTitle}
      </h3>
    </div>
  );
};

export default PostBtn;

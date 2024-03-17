import React from "react";
import { Link } from "react-router-dom";
import { SidebarMenuItems } from "../lib/data";

const Sidebar = ({ component }) => {
  return (
    <div
      className={`${ component === "home" ? "w-[25%] hidden lg:block" : "w-[100%] block"} h-full overflow-auto py-4 pl-3 z-0`}
    >
      {SidebarMenuItems.map((item, idx) => (
        <Link key={idx} to={item.to}>
          <div className="flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer hover:bg-[#e1e4e4]">
            {item.icon}
            <h3 className="text-lg capitalize font-medium text-gray-600">
              {item.mTitle}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

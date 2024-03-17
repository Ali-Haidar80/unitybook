import React from "react";
import Sidebar from "../components/sidebar";
import Rightbar from "../components/rightbar";
import PostCard from "../components/common/postCard";
import CreateUserPost from "../components/common/createUserPost";

const Feed = () => {
  return (
    <>
      <div className="flex justify-between h-[90%]">
        <Sidebar component={"home"}/>
        <div className="h-full scrollview overflow-y-auto overflow-x-hidden w-[100%] md:w-[60%] mx-auto flex flex-col items-center">
          <CreateUserPost/>
          <PostCard/>
        </div>
        <Rightbar />
      </div>
    </>
  );
};
export default Feed;
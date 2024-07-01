// import React from "react";

export const RightNavbar = () => {
  return (
    <>
      <div className="h-full flex gap-1 items-center justify-between px-2 bg-zinc-900 ">
        <div className="flex gap-1 items-center justify-between">
          <img
            className="size-8"
            src="https://www.svgrepo.com/show/452030/avatar-default.svg"
            alt="profilePic"
          ></img>
          <div>
            <span>UserName</span>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

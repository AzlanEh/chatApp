import React from "react";

export const ContactCard = () => {
  return (
    <>
      <div className="p-1">
        <button className="h-full w-full p-1 hover:bg-zinc-600 focus:bg-zinc-600 rounded-lg flex gap-1 items-center ">
          <img
            className="size-8"
            src="https://www.svgrepo.com/show/452030/avatar-default.svg"
            alt="profilePic"
          ></img>
          <div>azlan</div>
        </button>
      </div>
    </>
  );
};

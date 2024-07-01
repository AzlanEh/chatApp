import React from "react";

export const TypingArea = () => {
  return (
    <>
      <div className="h-full p-2 grid sm:grid-cols-9 grid-cols-6">
        <input
          className="sm:col-span-7 col-span-4 bg-zinc-700 py-2 pl-3  rounded-l-2xl border-none outline-none"
          placeholder="Type a message"
        ></input>
        <div className="sm:col-span-2 col-span-2 bg-zinc-700 py-1 pr-2 rounded-r-2xl grid justify-end grid-cols-3 gap-2">
          <button className="hover:bg-zinc-800 rounded-lg p-1 ">
            <i className="ri-attachment-line ri-xl"></i>
          </button>
          <button className="hover:bg-zinc-800 rounded-lg p-1 ">
            <i className="ri-image-add-fill ri-xl"></i>
          </button>
          <button className="hover:bg-zinc-800 rounded-lg p-1 ">
            <i className="ri-send-plane-2-fill ri-xl "></i>
          </button>
        </div>
      </div>
    </>
  );
};

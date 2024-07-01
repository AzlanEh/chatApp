import React from "react";
import { RightNavbar } from "./RightNavbar";
import { TypingArea } from "./TypingArea";

const RightPart = () => {
  return (
    <>
      <div className="bg-zinc-800 sm:col-span-9 col-span-12">
        <div className=" h-full  grid grid-rows-10 gap-[2px] ">
          <div className="row-span-1">
            <RightNavbar />
          </div>
          <div className="row-span-8"></div>
          <div className="row-span-1">
            <TypingArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPart;

import React from "react";
import { LeftNavbar } from "./LeftNavbar";
import ContactDisplay from "./ContactDisplay";

const LeftPart = () => {
  return (
    <>
      <div className="bg-zinc-800 col-span-3 hidden sm:block ">
        <div className=" h-full  grid grid-rows-10 gap-[2px] ">
          <div className="row-span-1 flex items-center justify-between px-2 bg-zinc-900 ">
            <LeftNavbar />
          </div>

          <div className="row-span-9 w-full">
            <ContactDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPart;

import React from "react";
import { ContactCard } from "./ContactCard";

const ContactDisplay = () => {
  return (
    <>
      <div className="h-full ">
        <div className="py-1 px-4">
          <input
            placeholder="Search"
            className="w-full py-[2px] px-2 bg-zinc-700 hover:bg-zinc-600 focus:bg-zinc-900 rounded-md border-b-2 border-b-zinc-400 focus:border-b-green-600 outline-none"
          ></input>
        </div>
        <div className="">
          <div className="h-full  grid grid-rows-10 px-1 ">
            <ContactCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDisplay;

import React from "react";
import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";

export const ChatPage = () => {
  return (
    <>
      <div className="bg-zinc-950 h-dvh w-dvw  grid grid-cols-12 gap-[2px] ">
        <LeftPart />
        <RightPart />
      </div>
    </>
  );
};

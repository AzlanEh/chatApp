// import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const LeftNavbar = () => {
  const logOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <span className="text-[30px] font-bold">Chats</span>
      <div className="text-slate-950 font-semibold">
        <button
          className="rounded-2xl bg-zinc-100 px-[10px] py-[2px]"
          onClick={logOutUser}
        >
          Log Out
        </button>
      </div>
    </>
  );
};

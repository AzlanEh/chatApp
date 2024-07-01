import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInUser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.log("error is ", error);
    }
  };

  return (
    <>
      <form onSubmit={logInUser}>
        <div className="flex justify-center items-center gap-4 flex-col  ">
          <div className="text-[30px] font-bold mb-5 ">LogIn</div>
          <div className="p-3 bg-zinc-950 border-zinc-100 border-2 rounded-full ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email ID"
              className=" bg-zinc-950  text-zinc-100 outline-none "
              required
            ></input>
            <i className="ri-mail-fill"></i>
          </div>
          <div className="p-3 bg-zinc-950 border-zinc-100 border-2 rounded-full ">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className=" bg-zinc-950  text-zinc-100 outline-none"
              required
            ></input>
            <i className="ri-lock-password-fill"></i>
          </div>
          <button
            type="submit"
            className="p-3 bg-zinc-100 hover:bg-zinc-300 font-bold w-full rounded-full text-zinc-950"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;

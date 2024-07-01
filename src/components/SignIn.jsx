import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
    } catch (error) {
      console.error("Error signing in", error);
      // Provide user-friendly error messages
      if (error.code === "auth/email-already-in-use") {
        alert("The email address is already in use by another account.");
      } else if (error.code === "auth/invalid-email") {
        alert("The email address is not valid.");
      } else if (error.code === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert("An error occurred during sign up.");
      }
    }
  };

  return (
    <>
      <form onSubmit={userDataSubmit}>
        <div className="flex justify-center items-center gap-4 flex-col  ">
          <div className="text-[30px] font-bold mb-5 ">SignIn</div>
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
            SignIn
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;

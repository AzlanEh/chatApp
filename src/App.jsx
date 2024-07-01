import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import "./App.css";
// import SinginPage from "./pages/SinginPage";
import { ChatPage } from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* <ChatPage /> */}
      {/* <LoginPage /> */}
      {/* <SinginPage /> */}
      {isSignedIn ? <ChatPage /> : <LoginPage />}
    </>
  );
};

export default App;

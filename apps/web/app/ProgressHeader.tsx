"use client";
import React, { useEffect, useState } from "react";

const ProgressHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const userName = localStorage.getItem("userName");

    if (loggedIn === "true" && userName) {
      setIsLoggedIn(true);
      setUserName(userName);
    }
  }, []);

  return (
    <header className="bg-gray-800 text-white py-4 px-8">
      {/* <div className="container mx-auto flex justify-between items-center"> */}
      {/* <h1 className="text-xl font-bold">Progress Tracker</h1> */}
      <div>
        {isLoggedIn ? (
          // <span className="text-sm">{userName}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {" "}
            <a href="/logout">
              Log Out <br />
              {userName}
            </a>
          </button>
        ) : (
          // <span className="text-sm">Please Log In</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {" "}
            <a href="/login">Log In</a>
          </button>
        )}
        {/* </div> */}
      </div>
    </header>
  );
};

export default ProgressHeader;

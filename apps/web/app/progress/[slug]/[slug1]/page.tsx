"use client";
import React, { useEffect, useState, useRef } from "react";
const page = (props: any) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const slug = props.params.slug1;
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");
    if (loggedIn === "true" && userId && userName) {
      setUserId(userId);
      console.log(userId);
      setUserName(userName);
    }
  });
  return (
    <>
          <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
            <embed
              src={`https://compiler.shubhamiitbhu.in/editor/${userName}/${slug}`}
              width="100%"
              height="100%"
              style={{ backgroundColor: "wheat" }}
            />
          </div>
    </>
  );
};

export default page;

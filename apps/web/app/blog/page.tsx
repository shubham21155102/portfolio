import React from "react";
import Header from "../Header";

const Blog = () => {
  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <embed
          src="https://learn.shubhamiitbhu.in/"
          width="100%"
          height="100%"
          style={{ backgroundColor: "wheat" }}
        />
      </div>
    </>
  );
};

export default Blog;

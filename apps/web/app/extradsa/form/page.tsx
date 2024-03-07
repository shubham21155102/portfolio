"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [tagId, setTagId] = useState("");
  const [tag, setTag] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [questionLink, setQuestionLink] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(
          "https://api.shubhamiitbhu.in/questions/questiontags",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setAllTags(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []); 

  const onSubmit = async (e:any) => {
    e.preventDefault();
    // console.log(tagId, tag, questionId, questionLink, questionName);
    const response = await fetch(
      "https://api.shubhamiitbhu.in/questions/addextradsaquestion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tagid:tagId,
          tagtitle:tag,
          questionid:questionId,
          questionlink:questionLink,
          questionname:questionName,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div>
        <section>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>

          <div className="box">
            <div className="container">
              <div className="form">
                <form onSubmit={onSubmit}>
                  <div className="selectBox">
                    <select
                      value={tagId}
                      onChange={(e) => setTagId(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      style={{backgroundColor:"#ff6b35"}}
                    >
                      <option value="">Select Tag</option>
                      {allTags.map((tag:any) => (
                        <option key={tag.tag} value={tag.tag}>
                          {tag.tagname}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Tag"
                      onChange={(e) => {
                        setTag(e.target.value);
                      }}
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Question Id"
                      onChange={(e) => setQuestionId(e.target.value)}
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Question Link"
                      onChange={(e) => setQuestionLink(e.target.value)}
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Question Name"
                      onChange={(e) => setQuestionName(e.target.value)}
                    />
                  </div>
                  <div className="inputBox">
                    <input type="submit" value="Submit" />
                  </div>
      
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

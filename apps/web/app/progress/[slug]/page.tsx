"use client";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import dsaData from "../dsa.json";
import Link from "next/link";
import Footer from "../../Footer";
import Image from "next/image";
import ProgressHeader from "../../ProgressHeader";
import { Button } from "@mui/material";
const SOLVED_CLASS = "bg-green-100";
const UNSOLVED_CLASS = "bg-red-100";
const IndividualTopics = (props: any) => {
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [solvedButtonClicked, setSolvedButtonClicked] = useState(false);
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [solvedQuestions, setSolvedQuestions] = useState<string[]>([]);
  const [reload, setReload] = useState(false);
  const slug = props.params.slug;

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const userId = localStorage.getItem("userId");
    if (loggedIn === "true" && userId) {
      setLoggedIn(true);
      setUserId(userId);
    }
  }, []);

  useEffect(() => {
    let solvedQuestionsFromLocalStorage =
      localStorage.getItem("solvedQuestions");
    if (!solvedQuestionsFromLocalStorage) {
      const fetchSolvedQuestions = async () => {
        try {
          const response = await fetch(
            `https://api.shubhamiitbhu.in/questions/questions`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: userId,
              }),
            },
          );
          const data = await response.json();
          setSolvedQuestions(data.data);
          await localStorage.setItem(
            "solvedQuestions",
            JSON.stringify(data.data),
          );
          console.log(data.data);
        } catch (error) {
          console.error("Error fetching solved questions:", error);
        }
      };

      if (userId) {
        fetchSolvedQuestions();
      }
    } else {
      setSolvedQuestions(JSON.parse(solvedQuestionsFromLocalStorage));
    }
  }, [userId, reload]);
  function isProblemSolved(problemId: string) {
    try {
      const q = solvedQuestions.includes(problemId);
      return q;
    } catch (e) {
      return false;
    }
  }
  async function problemSolved(userId: string, problemId: string) {
    await localStorage.removeItem("solvedQuestions");
    try {
      setLoadingStates((prevLoadingStates) => ({
        ...prevLoadingStates,
        [problemId]: true,
      }));
      setSolvedButtonClicked(true);
      const response = await fetch("https://api.shubhamiitbhu.in/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: userId,
          questionid: problemId,
        }),
      });
      setReload(!reload);
      const data = await response.json();
      console.log(data);
      setSolvedButtonClicked(false);
      setLoadingStates((prevLoadingStates) => ({
        ...prevLoadingStates,
        [problemId]: false,
      }));
    } catch (e) {
      console.log(e);
    }
  }
  async function problemUnsolved(userId: string, problemId: string) {
    await localStorage.removeItem("solvedQuestions");
    try {
      setLoadingStates((prevLoadingStates) => ({
        ...prevLoadingStates,
        [problemId]: true,
      }));
      setSolvedButtonClicked(true);
      const response = await fetch("https://api.shubhamiitbhu.in/questions", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: userId,
          questionid: problemId,
        }),
      });
      const data = await response.json();
      setReload(!reload);
      console.log(data);
      setSolvedButtonClicked(false);
      setLoadingStates((prevLoadingStates) => ({
        ...prevLoadingStates,
        [problemId]: false,
      }));
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {}, [solvedButtonClicked]);
  return (
    <>
      <div className="flex flex-col h-screen">
        <ProgressHeader />
        {/* <table >
        <thead>
    <tr className="text-red-900">
      <th style={{width:"5%"}}>Sr No. </th>
      <th style={{width:"50%"}}>Question </th>
      <th style={{width:"5%"}}>YouTube</th>
      <th style={{width:"5%"}}>Coding Ninjas</th>
      <th style={{width:"5%"}}>LeetCode</th>
      <th style={{width:"30%"}}>Status</th>
    </tr>
  </thead>
        </table> */}
        <div className="flex-grow px-4 py-8">
          {dsaData.data[slug - 1]?.sub_steps.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-8">
              <h2 className="text-lg font-bold text-black">{item.sl_no}</h2>
              <p className="mt-2 text-gray-800">{item.title}</p>
              <div className="mt-4">
                <table className="w-full">
                  <tbody>
                    {item.topics.map((topic, index) => (
                      <tr
                        key={index}
                        className={`rounded-lg shadow-md p-4 mb-8 ${
                          isProblemSolved(topic.id)
                            ? SOLVED_CLASS
                            : UNSOLVED_CLASS
                        }`}
                      >
                        <td className="p-4 " style={{ width: "5%" }}>
                          <p className="text-lg font-bold text-black mr-2">
                            {topic.sl_no_a2z}
                          </p>
                        </td>
                        <td className="p-4" style={{ width: "50%" }}>
                          <p className="mt-2 text-gray-900 mr-2 px-10">
                            {topic.title}
                          </p>
                        </td>
                        <td className="p-4" style={{ width: "10%" }}>
                          <Link
                            href={`${topic.yt_link}`}
                            passHref
                            target="__blank"
                          >
                            <Image
                              src={"/youtube.svg"}
                              alt="YouTube Link"
                              width={35}
                              height={35}
                              className="rounded-full"
                            />
                          </Link>
                        </td>
                        <td className="p-4" style={{ width: "10%" }}>
                          {topic.p1_link && (
                            <Link href={`${topic.p1_link}`} target="__blank">
                              <Image
                                src={"/cn.svg"}
                                alt="Link 1"
                                width={100}
                                height={100}
                                className="rounded-full"
                              />
                            </Link>
                          )}
                        </td>
                        <td className="p-4" style={{ width: "10%" }}>
                          {topic.p2_link && (
                            <Link href={`${topic.p2_link}`} target="__blank">
                              <Image
                                src={"/leetcode.png"}
                                alt="Link 2"
                                width={25}
                                height={25}
                                className="rounded-full"
                              />
                            </Link>
                          )}
                        </td>
                        <td style={{ width: "25%" }}>
                          {loggedIn && (
                            <>
                              {isProblemSolved(topic.id) ? (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  className="p-2"
                                  onClick={() =>
                                    problemUnsolved(userId, topic.id)
                                  }
                                  disabled={loadingStates[topic.id]}
                                >
                                  {loadingStates[topic.id] ? (
                                    <>
                                      <ProgressBar
                                        visible={true}
                                        height="40"
                                        width="120"
                                        barColor="#4fa94d"
                                        // color="#4fa94d"
                                        ariaLabel="progress-bar-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                      />
                                    </>
                                  ) : (
                                    <>Mark as Unsolved</>
                                  )}
                                </Button>
                              ) : (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  className="p-2"
                                  onClick={() =>
                                    problemSolved(userId, topic.id)
                                  }
                                  disabled={loadingStates[topic.id]}
                                >
                                  {loadingStates[topic.id] ? (
                                    <>
                                      <ProgressBar
                                        visible={true}
                                        height="40"
                                        width="40"
                                        barColor="#4fa94d"
                                        // color="#4fa94d"
                                        ariaLabel="progress-bar-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                      />
                                    </>
                                  ) : (
                                    <>Mark as Solved</>
                                  )}
                                </Button>
                              )}
                            </>
                          )}
                        </td>
                        <td>
                          {/* {userId === "d592f4cd-8f4d-4af0-9d80-723827eeb65f" ? ( */}
                          <Link
                            href={`/progress/${slug}/${topic.id}`}
                            className="bg-gray"
                            target="__blank"
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              className="p-2"
                            >
                              Submit Code
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndividualTopics;

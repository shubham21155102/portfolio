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
const UNSOLVED_CLASS = "bg-gray-100";

const IndividualTopics = (props: any) => {
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});
  const [solvedQuestions, setSolvedQuestions] = useState<string[]>([]);
  const [reload, setReload] = useState(false);
  const slug = props.params.slug;
  const topicData = dsaData.data[slug - 1];

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const userId = localStorage.getItem("userId");
    if (loggedIn === "true" && userId) {
      setLoggedIn(true);
      setUserId(userId);
    }
  }, []);

  useEffect(() => {
    let solvedQuestionsFromLocalStorage = localStorage.getItem("solvedQuestions");
    if (!solvedQuestionsFromLocalStorage) {
      const fetchSolvedQuestions = async () => {
        try {
          const response = await fetch(
            `https://api.shubhamiitbhu.in/questions/questions`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ userId }),
            }
          );
          const data = await response.json();
          setSolvedQuestions(data.data);
          await localStorage.setItem("solvedQuestions", JSON.stringify(data.data));
        } catch (error) {
          console.error("Error fetching solved questions:", error);
        }
      };
      if (userId) fetchSolvedQuestions();
    } else {
      setSolvedQuestions(JSON.parse(solvedQuestionsFromLocalStorage));
    }
  }, [userId, reload]);

  const isProblemSolved = (problemId: string) => solvedQuestions.includes(problemId);

  const toggleProblemStatus = async (problemId: string, markAsSolved: boolean) => {
    await localStorage.removeItem("solvedQuestions");
    setLoadingStates((prev) => ({ ...prev, [problemId]: true }));
    try {
      await fetch("https://api.shubhamiitbhu.in/questions", {
        method: markAsSolved ? "POST" : "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userid: userId, questionid: problemId }),
      });
      setReload(!reload);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [problemId]: false }));
    }
  };

  const allTopics = topicData?.sub_steps.flatMap((step) => step.topics) || [];
  const completionPercentage =
    allTopics.length > 0
      ? (solvedQuestions.filter((id) => allTopics.some((topic) => topic.id === id)).length /
          allTopics.length) *
        100
      : 0;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ProgressHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{topicData?.title}</h1>
          <div className="flex items-center mt-4">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <span className="ml-4 text-gray-600 font-semibold">
              {completionPercentage.toFixed(2)}%
            </span>
          </div>
        </div>

        {topicData?.sub_steps.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="p-4">#</th>
                    <th className="p-4">Problem</th>
                    <th className="p-4">Links</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {item.topics.map((topic, topicIndex) => (
                    <tr
                      key={topicIndex}
                      className={`border-t ${
                        isProblemSolved(topic.id) ? SOLVED_CLASS : UNSOLVED_CLASS
                      }`}
                    >
                      <td className="p-4 font-bold text-gray-800">{topic.sl_no_a2z}</td>
                      <td className="p-4 text-gray-900">{topic.title}</td>
                      <td className="p-4 flex items-center space-x-4">
                        <Link href={topic.yt_link || "#"} passHref target="_blank">
                          <Image src="/youtube.svg" alt="YouTube" width={28} height={28} />
                        </Link>
                        {topic.p1_link && (
                          <Link href={topic.p1_link} target="_blank">
                            <Image src="/cn.svg" alt="Coding Ninjas" width={28} height={28} />
                          </Link>
                        )}
                        {topic.p2_link && (
                          <Link href={topic.p2_link} target="_blank">
                            <Image src="/leetcode.png" alt="LeetCode" width={22} height={22} />
                          </Link>
                        )}
                      </td>
                      <td className="p-4">
                        {loggedIn && (
                          <Button
                            variant="contained"
                            color={isProblemSolved(topic.id) ? "secondary" : "primary"}
                            onClick={() => toggleProblemStatus(topic.id, !isProblemSolved(topic.id))}
                            disabled={loadingStates[topic.id]}
                          >
                            {loadingStates[topic.id] ? (
                              <ProgressBar visible height="24" width="24" barColor="#fff" />
                            ) : isProblemSolved(topic.id) ? (
                              "Mark as Unsolved"
                            ) : (
                              "Mark as Solved"
                            )}
                          </Button>
                        )}
                      </td>
                      <td className="p-4">
                        <Link href={`/progress/${slug}/${topic.id}`} target="_blank">
                          <Button variant="outlined" color="primary">
                            Solve
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
      </main>
      <Footer />
    </div>
  );
};

export default IndividualTopics;

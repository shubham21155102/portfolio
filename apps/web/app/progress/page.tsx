"use client";
import React, { useEffect, useState } from "react";
import dsaData from "./dsa.json";
import Footer from "../Footer";
import ProgressHeader from "../ProgressHeader";
import ProgressCard from "../components/ProgressCard";

const Page = () => {
  const [userId, setUserId] = useState("");
  const [solvedQuestions, setSolvedQuestions] = useState<string[]>([]);

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem("userId");
    if (userIdFromStorage) {
      setUserId(userIdFromStorage);
    }
  }, []);

  useEffect(() => {
    const fetchSolvedQuestions = async () => {
      try {
        const response = await fetch(
          `https://api.shubhamiitbhu.in/questions/questions`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId }),
          },
        );
        const data = await response.json();
        setSolvedQuestions(data.data);
      } catch (error) {
        console.error("Error fetching solved questions:", error);
      }
    };

    if (userId) {
      fetchSolvedQuestions();
    }
  }, [userId]);

  const calculateCompletion = (topics: any[]) => {
    if (solvedQuestions.length === 0) {
      return 0;
    }
    const totalTopics = topics.length;
    const solvedTopics = topics.filter((topic) =>
      solvedQuestions.includes(topic.id),
    ).length;
    return (solvedTopics / totalTopics) * 100;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ProgressHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Your Progress
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dsaData.data.map((item, index) => {
            const allTopics = item.sub_steps.flatMap((step) => step.topics);
            const percentage = calculateCompletion(allTopics);
            return (
              <ProgressCard
                key={index}
                title={item.title}
                percentage={percentage}
                sl_no={item.sl_no}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;

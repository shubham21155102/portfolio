"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const questionsFetch = async () => {
      try {
        const res = await fetch(
          "https://api.shubhamiitbhu.in/questions/extraquestions",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const result = await res.json();
        console.log(result);
        // questions.sort((a:any,b:any)=>a.tagtitle.localeCompare(b.tagtitle))
        setQuestions(result.data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    questionsFetch();
  }, []);
  const sortByTag = () => {
    const sortedQuestions = [...questions].sort((a: any, b: any) =>
      a.tagtitle.localeCompare(b.tagtitle),
    );
    setQuestions(sortedQuestions);
  };
  const sortByName = () => {
    const sortedQuestions = [...questions].sort((a: any, b: any) =>
      a.tagtitle.localeCompare(b.tagtitle),
    );
    setQuestions(sortedQuestions);
  };

  useEffect(() => {
    const sortedQuestions = [...questions].sort((a: any, b: any) =>
      a.tagtitle.localeCompare(b.tagtitle),
    );
    setQuestions(sortedQuestions);
  }, [questions]);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow px-4 py-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-lg font-bold text-black border border-gray-300">
              <th className="w-1/12 px-4 py-2 border border-gray-300 text-center">
                Sr No.
              </th>
              <th className="w-5/12 px-4 py-2 border border-gray-300 text-center">
                Question Name
              </th>
              <th className="w-4/12 px-4 py-2 border border-gray-300 text-center">
                Tag
              </th>
              <th className="w-2/12 px-4 py-2 border border-gray-300 text-center">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q: any, index) => (
              <tr
                key={index}
                className="text-lg font-normal border-b border-gray-300"
              >
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {q.questionname}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {q.tagtitle}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  <Link
                    href={q.questionlink}
                    className="text-blue-500 hover:underline text-center"
                    target="__blank"
                  >
                    Click
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;

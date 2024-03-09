"use client";
import Link from "next/link";
import React, { useEffect, useState, useMemo, memo } from "react";

const Page = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const questionsFetch = async () => {
      if (!("indexedDB" in window)) {
        const extraDSAQuestionsCache =
          localStorage.getItem("extraDSAQuestions");
        if (!extraDSAQuestionsCache) {
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
            localStorage.setItem(
              "extraDSAQuestions",
              JSON.stringify(result.data),
            );
            // questions.sort((a:any,b:any)=>a.tagtitle.localeCompare(b.tagtitle))
            setQuestions(result.data);
          } catch (error: any) {
            console.log(error.message);
          }
        } else {
          setQuestions(JSON.parse(extraDSAQuestionsCache));
        }
      } else {
        const dbName = "shubhamiitbhu";
        const dbVersion = 1;
        const dbRequest = indexedDB.open(dbName, dbVersion);
        dbRequest.onerror = function (event: any) {
          console.log("Database error: " + JSON.stringify(event.error));
        };
        dbRequest.onupgradeneeded = function (event: any) {
          const db = dbRequest.result;
          db.createObjectStore("extraDSAQuestions", { keyPath: "id" });
        };

        dbRequest.onsuccess = function (event: any) {
          const db = dbRequest.result;
          const transaction = db.transaction("extraDSAQuestions", "readonly");
          const objectStore = transaction.objectStore("extraDSAQuestions");
          const request: any = objectStore.getAll();
          request.onsuccess = function (event: any) {
            if (request.result.length === 0) {
              fetch("https://api.shubhamiitbhu.in/questions/extraquestions")
                .then((res: any) => res.json())
                .then((result: any) => {
                  const transaction = db.transaction(
                    "extraDSAQuestions",
                    "readwrite",
                  );
                  const objectStore =
                    transaction.objectStore("extraDSAQuestions");
                  result.data.forEach((question: any) => {
                    objectStore.add(question);
                  });
                  setQuestions(result.data);
                })
                .catch((error: any) => {
                  console.log(error.message);
                });
            } else {
              setQuestions(request.result);
            }
          };
        };
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

  // useEffect(() => {
  //   const sortedQuestions = [...questions].sort((a: any, b: any) =>
  //     a.tagtitle.localeCompare(b.tagtitle),
  //   );
  //   setQuestions(sortedQuestions);
  // }, [questions]);
  const sortedQuestions = useMemo(() => {
    return [...questions].sort((a: any, b: any) =>
      a.tagtitle.localeCompare(b.tagtitle),
    );
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
            {sortedQuestions.map((q: any, index: number) => (
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
            {/* UseEffect*/}
            {/* {questions.map((q: any, index:number) => (
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
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(Page);

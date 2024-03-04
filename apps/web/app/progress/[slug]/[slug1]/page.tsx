"use client";
import React, { useEffect, useState, useRef } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
const page = (props: any) => {
  const [userId, setUserId] = useState("");
  const [answers, setAnswers] = useState("");
  const slug = props.params.slug1;
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const userId = localStorage.getItem("userId");
    if (loggedIn === "true" && userId) {
      setUserId(userId);
      console.log(userId);
    }
  });
  useEffect(() => {
    const fetchSolvedQuestions = async () => {
      try {
        const response = await fetch(
          `https://api.shubhamiitbhu.in/code/get-code-by-question-id-and-user-id`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              user_id: userId,
            },
            body: JSON.stringify({
              userId: userId,
              questionId: slug,
            }),
          },
        );
        const data = await response.json();
        console.log(data[0].code);
        setAnswers(data[0].code);
      } catch (error) {
        console.error("Error fetching solved questions:", error);
      }
    };

    if (userId) {
      fetchSolvedQuestions();
    }
  }, [userId, slug]);
  return (
    <>
      {answers.length > 0 ? (
        <>
          <code>{answers}</code>
        </>
      ) : (
        <>
          <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
            <embed
              src="https://compiler.shubhamiitbhu.in/"
              width="100%"
              height="100%"
              style={{ backgroundColor: "wheat" }}
            />
          </div>
          {/* <div style={{ width: "25%", height: "100vh", overflow: "hidden" }}>
            <Editor
              height="100%"
              defaultLanguage="javascript"
              defaultValue="// some code"
              value={answers}
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                wordWrap: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
              onChange={(value: any) => {
                setAnswers(value);
              }}
            />
          </div> */}

        </>
      )}
    </>
  );
};

export default page;

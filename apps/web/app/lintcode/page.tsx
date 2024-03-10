"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlass, ProgressBar } from "react-loader-spinner";
const Page = () => {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.shubhamiitbhu.in/questions/lintcode`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            page: page,
            pagesize: pageSize
          })
        });
        const result = await res.json();
        setQuestions(result.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [page]);

  const navigatePage = (direction:any) => {
    if (direction === 'prev' && page > 1) {
      setPage(page - 1);
    } else if (direction === 'next') {
      setPage(page + 1);
    }
  };

  return (
    <div 
    // className="container mx-auto my-8"
    >
      <div 
      className="flex justify-center mb-4"
      >

        <button
          onClick={() => navigatePage('prev')}
          disabled={page === 1 || loading}
          className="px-4 py-2 mr-2 text-lg font-bold text-gray-800 bg-gray-200 rounded-md"
        >
          Previous
        </button>
        <span className="text-xl font-bold text-gray-800">{page}</span>
        <button
          onClick={() => navigatePage('next')}
          disabled={loading}
          className="px-4 py-2 ml-2 text-lg font-bold text-gray-800 bg-gray-200 rounded-md"
        >
          Next
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-lg font-bold text-gray-800">Problem ID</th>
              <th className="px-4 py-2 text-lg font-bold text-gray-800">Title</th>
              <th className="px-4 py-2 text-lg font-bold text-gray-800">Link</th>
              <th className="px-4 py-2">Problem Tags</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
                 <center>
          <ProgressBar
            visible={true}
            height="50vh"
            width="50vh"
            barColor="#4fa94d"
            // color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <MagnifyingGlass
            visible={true}
            height="50vh"
            width="50vh"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </center>
            
            ) : (
              questions.map((question:any) => (
                <tr key={question.problem_id}>
                  <td className="px-4 py-2">{question.problem_id}</td>
                  <td className="px-4 py-2">{question.title}</td>
                 
                  <td className="px-4 py-2">
                    <Link href={`https://www.lintcode.com/problem/${question.problem_id}/`} passHref className="text-blue-600 underline" target='__blank'>
                      
                        Solve
                    </Link>
                  </td>
                  <td className="px-4 py-2">{question.problem_tags.map((e:any)=>{
                     return (
                          <span key={e} className="px-2 py-1 mr-2 text-sm font-bold text-white bg-gray-800 rounded-md">
                             {e.unique_name}
                          </span>
                        
                     )
                  })}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;

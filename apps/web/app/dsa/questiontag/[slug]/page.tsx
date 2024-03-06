"use client";
import React, { useEffect } from "react";
import jsonData from "../../datas/questions.json";
import { MagnifyingGlass, ProgressBar } from "react-loader-spinner";
const page = (props: any) => {
  const slug = props.params.slug;
  const [data, setData] = React.useState([]);
  useEffect(() => {
    // Check if slug is defined before using it
    if (slug) {
      const items: any = [];
      jsonData.data.map((e) => {
        if (e.id == slug) {
          items.push(e);
        }
      });
      setData(items);
      console.log(data);
    }
  }, [slug]);
  const space = " -->  ";
  return (
    <>
      {data.length === 0 && (
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
      )}
      <div className="flex-grow px-4 py-8">
        {data.map((item: any, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 mb-8 flex"
          >
            <h2 className="text-lg font-bold text-black">{index + 1}</h2>{" "}
            <span>{space}</span>
            <h3 className="text-lg font-bold text-black">{item.title}</h3>
            {item.questions.map((question: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 mb-8 flex"
              >
                <h3 className="text-lg font-bold text-black">{index + 1}</h3>
                <h4 className="text-lg font-bold text-black">
                  {question.name}
                </h4>
              </div>
            ))}
            <div className="mt-4">
              <table className="w-full">
                <tbody></tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;

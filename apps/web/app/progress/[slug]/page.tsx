import React from "react";
import dsaData from "../dsa.json";
import Link from "next/link";
import Header from "../../Header";
import Footer from "../../Footer";
import Image from "next/image";

const IndividualTopics = (props: any) => {
  const slug = props.params.slug;

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow px-4 py-8">
          {dsaData.data[slug - 1]?.sub_steps.map((item, index) => {
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-8">
                <h2 className="text-lg font-bold text-black">{item.sl_no}</h2>
                <p className="mt-2 text-gray-800">{item.title}</p>
                <div className="mt-4">
                {item.topics.map((topic, index) => (
  <div key={index} className="relative bg-gray-100 rounded-lg shadow-md mb-4">
    <table className="w-full">
      <tbody>
        <tr>
          <td className="p-4 flex items-center">
            <h3 className="text-lg font-bold text-black mr-2">{topic.sl_no_a2z}</h3>
            <p className="mt-2 text-gray-900 mr-2 px-10">{topic.title}</p>
          </td>
          <td className="p-4">
            <Link href={`${topic.yt_link}`} passHref target="__blank">
              <Image 
                
                src={"/youtube.svg"}
                alt="YouTube Link"
                width={35}
                height={35}
                className="rounded-full"
              />
            </Link>
          </td>
          <td className="p-4">
            <p className="mt-2 text-gray-900 mr-2 hidden absolute top-0 left-full bg-white p-2 shadow-lg rounded-lg border border-gray-200 pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 ">{topic.tags}</p>
          </td>
          <td className="p-4">
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
          <td className="p-4">
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
        </tr>
      </tbody>
    </table>
  </div>
))}

                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndividualTopics;

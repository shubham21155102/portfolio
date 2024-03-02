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
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 mb-8"
              >
                <h2 className="text-lg font-bold text-black">{item.sl_no}</h2>
                <p className="mt-2 text-gray-800">{item.title}</p>
                <div className="mt-4">
                  {item.topics.map((topic, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 ml-4 flex"
                      >
                        <h3 className="text-lg font-bold text-black">
                          {topic.sl_no_a2z}
                        </h3>
                        <p className="mt-2 text-gray-900">{topic.title}</p>
                        <Link href={`${topic.yt_link}`}>
                          <Image
                            style={{ backgroundColor: "red" }}
                            src={"/youtube.svg"}
                            alt="Picture of the author"
                            width={35}
                            height={35}
                            className="rounded-full"
                          />
                        </Link>
                      </div>
                    );
                  })}
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

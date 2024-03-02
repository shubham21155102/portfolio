import React from "react";
import dsaData from "./dsa.json";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";
const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow px-4 py-8">
        {dsaData.data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <Link
              href={`/progress/${item.sl_no.toString()}`}
              className="bg-gray"
            >
              <span className="text-lg font-bold text-black">{item.sl_no}</span>
              <span className="ml-2 text-gray-900">{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;

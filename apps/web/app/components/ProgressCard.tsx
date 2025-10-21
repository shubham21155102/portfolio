import Link from "next/link";
import React from "react";

const ProgressCard = ({
  title,
  percentage,
  sl_no,
}: {
  title: string;
  percentage: number;
  sl_no: number;
}) => {
  return (
    <Link href={`/progress/${sl_no}`}>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-black">{title}</span>
          <span className="text-gray-600">{percentage.toFixed(2)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </Link>
  );
};

export default ProgressCard;

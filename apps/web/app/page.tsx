import Image from "next/image";
import React from "react";
export default function Page(): JSX.Element {
  return (
    <>
     
      <div className="flex flex-row justify-center items-center my-60">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={'/shubham.jpg'}
            alt="Picture of the author"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Shubham Patel</div>
          <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Software Developer Enthusiast</div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function Page(): JSX.Element {
  return (
    <>
      <div >
        <ul className="flex flex-column text-2xl float-end my-8 px-16 text-gray-300">
          <li className="mx-10"><Link href="/home">Home</Link></li>
          <li className="mx-10"><Link href="/about">About</Link></li>
          <li className="mx-10"><Link href="/blog">Blog</Link></li>
          <li className="mx-10"><Link href="/contact">Contact</Link></li>
          <DarkModeIcon className="mx-10" />
          <LightModeIcon className="mx-10" />

        </ul>
      </div>
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

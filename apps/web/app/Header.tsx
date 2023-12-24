"use client"
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Link from "next/link";
type Props = {}
const Header = (props: Props) => {
  return (
    <>
     <div >
        <ul className="flex flex-column text-2xl float-end my-8 px-16 text-gray-300">
          <li className="mx-10"><Link href="/">Home</Link></li>
          <li className="mx-10"><Link href="/about">About</Link></li>
          <li className="mx-10"><Link href="/blog">Blog</Link></li>
          <li className="mx-10"><Link href="/contact">Contact</Link></li>
          <li className="mx-10"><Link href="/work">Works</Link></li>
          <DarkModeIcon className="mx-10" />
          <LightModeIcon className="mx-10" />

        </ul>
      </div>
    </>
  )
}

export default Header
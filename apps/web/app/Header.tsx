"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

const Header = () => {
  const [button, setButton] = useState(true);
  const [phoneShow, setPhoneShow] = useState(false);

  const showButton = () => {
    if (window.innerWidth > 960) {
      setButton(false);
    } else {
      setButton(true);
      // alert("hello");
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);

    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      {button ? (
        <>
          <div className="flex justify-between items-center py-4 px-8">
            <div className="text-2xl text-gray-300">
              {!phoneShow ? (
                <MenuIcon
                  onClick={() => {
                    setPhoneShow(!phoneShow);
                  }}
                />
              ) : (
                <>
                  <center>
                    <div className="flex flex-col text-2xl text-gray-300">
                      <ul className="flex flex-col text-2xl text-gray-300">
                        <li
                          className="mx-10 my-4"
                          onClick={() => {
                            setPhoneShow(!phoneShow);
                            sessionStorage.setItem("phoneShow", "false");
                          }}
                        >
                          <CancelIcon />
                        </li>
                        {/* <li className="mx-10 my-4"><Link href="/">Home</Link></li>
                  <li className="mx-10 my-4"><Link href="/about">About</Link></li> */}
                        <li className="mx-10 my-4">
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li className="mx-10 my-4">
                          <Link href="/progress">DSA</Link>
                        </li>

                        <li className="mx-10 my-4">
                          <Link href="/contact">Contact</Link>
                        </li>
                        <li className="mx-10 my-4">
                          <Link href="/work">Works</Link>
                        </li>
                        <li className="mx-10 my-4">
                          <Link href="/resume">Resume</Link>
                        </li>
                      </ul>
                    </div>
                  </center>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div>
          <ul className="flex flex-column text-2xl float-end my-8 px-16 text-gray-300">
            {/* <li className="mx-10"><Link href="/">Home</Link></li>
          <li className="mx-10"><Link href="/about">About</Link></li> */}
            <li className="mx-10">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mx-10">
              <Link href="/progress">DSA</Link>
            </li>
            <li className="mx-10">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="mx-10">
              <Link href="/work">Works</Link>
            </li>
            <li className="mx-10">
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

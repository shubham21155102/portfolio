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
                  className="cursor-pointer"
                />
              ) : (
                <>
                  <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-90 z-50">
                    <div
                      className="mb-4 cursor-pointer"
                      onClick={() => {
                        setPhoneShow(false);
                      }}
                    >
                      <CancelIcon fontSize="large" />
                    </div>
                    <ul className="flex flex-col items-center text-xl text-gray-300 space-y-4">
                      <li
                        className="cursor-pointer"
                        onClick={() => setPhoneShow(false)}
                      >
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => setPhoneShow(false)}
                      >
                        <Link href="/progress">DSA</Link>
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => setPhoneShow(false)}
                      >
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => setPhoneShow(false)}
                      >
                        <Link href="/work">Works</Link>
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => setPhoneShow(false)}
                      >
                        <Link href="/resume">Resume</Link>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center py-4">
          <ul className="flex space-x-8 text-xl text-gray-300">
            <li className="cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/progress">DSA</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/work">Works</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

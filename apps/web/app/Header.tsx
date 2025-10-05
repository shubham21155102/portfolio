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
          <div className="flex justify-between items-center py-6 px-8 backdrop-blur-md bg-slate-900/30 border-b border-white/10">
            <div className="text-2xl text-white">
              {!phoneShow ? (
                <MenuIcon
                  onClick={() => {
                    setPhoneShow(!phoneShow);
                  }}
                  className="cursor-pointer hover:text-primary-400 transition-colors"
                />
              ) : (
                <>
                  <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 bg-opacity-95 z-50 backdrop-blur-xl">
                    <div
                      className="mb-8 cursor-pointer text-white hover:text-primary-400 transition-colors"
                      onClick={() => {
                        setPhoneShow(false);
                      }}
                    >
                      <CancelIcon fontSize="large" />
                    </div>
                    <ul className="flex flex-col items-center text-2xl text-white space-y-6">
                      <li
                        className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                        onClick={() => setPhoneShow(false)}
                      >
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li
                        className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                        onClick={() => setPhoneShow(false)}
                      >
                        <Link href="/progress">DSA</Link>
                      </li>
                      <li
                        className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                        onClick={() => setPhoneShow(false)}
                      >
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li
                        className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                        onClick={() => setPhoneShow(false)}
                      >
                        <Link href="/work">Works</Link>
                      </li>
                      <li
                        className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
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
        <div className="flex justify-center py-6 backdrop-blur-md bg-slate-900/30 border-b border-white/10">
          <ul className="flex space-x-10 text-lg text-white font-medium">
            <li className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110 relative group">
              <Link href="/">Home</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110 relative group">
              <Link href="/blog">Blog</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110 relative group">
              <Link href="/progress">DSA</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110 relative group">
              <Link href="/contact">Contact</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110 relative group">
              <Link href="/work">Works</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer hover:text-primary-400 transition-all duration-300 transform hover:scale-110 relative group">
              <Link href="/resume">Resume</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

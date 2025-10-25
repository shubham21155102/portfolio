"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/progress", label: "DSA" },
    { href: "/work", label: "Works" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white text-xl font-semibold tracking-tight">Shubham</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white hover:text-primary-400 transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side CTA / mobile button */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link
                href="/login"
                className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-md shadow-sm hover:bg-primary-600 transition"
              >
                Sign in
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="ml-3 inline-flex items-center justify-center p-2 rounded-md text-white md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400"
            >
              {/* Hamburger / close icon */}
              <svg
                className={`h-6 w-6 transition-transform ${open ? "transform rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} bg-slate-900/95 backdrop-blur-md border-t border-white/5`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white text-lg font-medium px-2 py-2 rounded hover:bg-slate-800/60 transition"
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block text-center w-full px-4 py-2 bg-primary-500 text-white rounded-md shadow-sm hover:bg-primary-600 transition"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

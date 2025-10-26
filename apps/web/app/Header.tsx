"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (saved === "dark" || (!saved && prefersDark)) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    } catch (e) {
      // ignore (server or browsers without localStorage)
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore
    }
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/progress", label: "DSA" },
    { href: "/work", label: "Works" },
  { href: "/contact", label: "Contact Us" },
    { href: "/resume", label: "Resume" },
  ];

  return (
  <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20">
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
                className="text-white hover:text-primary-300 transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side CTA / mobile button */}
          <div className="flex items-center">
            {/* Theme toggle */}
            <button
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
              className="ml-3 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-slate-800/60 transition"
            >
              {isDark ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 3.5zM10 13a3 3 0 100-6 3 3 0 000 6zM4.22 5.47a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L4.22 6.53a.75.75 0 010-1.06zM14.66 13.94a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM3.5 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H4.25A.75.75 0 013.5 10zM13 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0113 10zM4.22 14.53a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM14.66 6.06a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0z" />
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                </svg>
              )}
            </button>

            <div className="hidden md:flex md:items-center md:space-x-3">
              <a
                href="tel:6201060889"
                className="inline-flex items-center px-3 py-2 text-white rounded-md hover:bg-slate-800/60 transition"
              >
                {/* Phone icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884l2-3A1 1 0 015 2h3a1 1 0 011 .883l.6 4A1 1 0 009.6 8.9L8.95 9.1a11.042 11.042 0 005.01 5.01l.2-.65a1 1 0 01.02-.45l4-.6A1 1 0 0118 16v3a1 1 0 01-1 1 16 16 0 01-15-15 1 1 0 011-1h3a1 1 0 01.884.6l-.781 2.284A1 1 0 012.003 5.884z" />
                </svg>
                <span className="ml-2">6201060889</span>
              </a>

              <Link
                href="/login"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md shadow-sm hover:bg-primary-500 transition"
              >
                Sign in
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="ml-3 inline-flex items-center justify-center p-2 rounded-md text-white md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300"
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
        className={`md:hidden ${open ? "block" : "hidden"} bg-slate-900/95 backdrop-blur-md border-t border-slate-700/10`}
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

          <a
            href="tel:6201060889"
            onClick={() => setOpen(false)}
            className="block text-white text-lg font-medium px-2 py-2 rounded hover:bg-slate-800/60 transition"
          >
            Call: 6201060889
          </a>

          <div className="pt-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block text-center w-full px-4 py-2 bg-primary-600 text-white rounded-md shadow-sm hover:bg-primary-500 transition"
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

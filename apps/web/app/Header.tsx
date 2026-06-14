"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { profile } from "./data/portfolio";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      // Portfolio looks best in dark; default to dark unless user chose light.
      if (saved === "light") {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      } else if (saved === "dark" || prefersDark || !saved) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
    } catch (e) {
      // ignore (server or browsers without localStorage)
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    { href: "/#skills", label: "Skills" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
    { href: "/lab", label: "Lab" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-slate-950/70"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-xl font-semibold tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(45,212,191,1), rgba(124,58,237,1))",
              }}
            >
              {profile.name.split(" ")[0]}
            </span>
            <span className="text-primary-400">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium text-slate-700 transition-colors hover:text-primary-500 dark:text-slate-200"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition hover:bg-slate-200/40 dark:text-slate-200 dark:hover:bg-slate-800/60"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <Link
              href={profile.resumeUrl}
              target="_blank"
              className="hidden rounded-lg bg-gradient-to-r from-primary-500 to-accent-purple px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 md:inline-flex"
            >
              Resume
            </Link>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:text-slate-200 md:hidden"
            >
              {open ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/10 bg-white/95 backdrop-blur-sm dark:bg-slate-950/95`}
      >
        <div className="space-y-1 px-4 pb-6 pt-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded px-2 py-2.5 text-lg font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800/60"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={profile.resumeUrl}
            target="_blank"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-gradient-to-r from-primary-500 to-accent-purple px-4 py-2.5 text-center font-semibold text-white"
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

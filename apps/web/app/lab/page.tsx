"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Trophy,
  ListChecks,
  Puzzle,
  Bot,
  LogIn,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Header from "../Header";

const tools = [
  {
    href: "/progress",
    title: "DSA Tracker",
    desc: "Track my data-structures & algorithms practice topic by topic.",
    icon: Code,
    accent: "from-cyan-500 to-blue-600",
  },
  {
    href: "/progress/leaderboard",
    title: "Leaderboard",
    desc: "Friendly competitive ranking across solved problems.",
    icon: Trophy,
    accent: "from-amber-500 to-orange-600",
  },
  {
    href: "/lintcode",
    title: "LintCode",
    desc: "Problem set and solutions sourced from LintCode.",
    icon: ListChecks,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    href: "/extradsa",
    title: "Extra DSA",
    desc: "An extended, tag-organized question bank with a submission form.",
    icon: Puzzle,
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    href: "/chat",
    title: "AI Chat",
    desc: "Standalone playground for my personal AI agent.",
    icon: Bot,
    accent: "from-pink-500 to-rose-600",
  },
  {
    href: "/login",
    title: "Sign in / Register",
    desc: "Account access for the tracker and leaderboard features.",
    icon: LogIn,
    accent: "from-slate-500 to-slate-700",
  },
];

export default function LabPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary-400 dark:text-slate-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
            Playground
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            The Lab
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Side tools and experiments I keep around — a DSA tracker, a
            leaderboard, problem sets and an AI playground. These live separately
            from the main portfolio.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={t.href}
                  className="group flex h-full flex-col rounded-2xl surface-card p-6 backdrop-blur-xl transition-colors hover:border-primary-400/50"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${t.accent} text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {t.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-500 transition-colors group-hover:text-primary-400 dark:text-primary-300">
                    Open
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </main>
    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-10 pt-24">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-primary-500/30 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-20 h-[26rem] w-[26rem] rounded-full bg-accent-purple/30 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-pink/20 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        {/* Left: copy */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-400/10 px-4 py-1.5 text-sm font-medium text-primary-200 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400" />
            </span>
            Open to opportunities · {profile.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
          >
            <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-primary-400 via-accent-purple to-accent-pink bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:mx-0"
          >
            {profile.headline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/25 transition-transform hover:scale-105"
            >
              View my work
            </a>
            <Link
              href={profile.resumeUrl}
              target="_blank"
              className="rounded-xl border border-slate-300/60 bg-white/5 px-6 py-3 font-semibold text-slate-700 backdrop-blur transition-colors hover:bg-white/10 dark:border-white/20 dark:text-white"
            >
              Resume
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-8 flex items-center justify-center gap-5 text-2xl text-slate-500 dark:text-slate-400 md:justify-start"
          >
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary-400">
              <FaGithub />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary-400">
              <FaLinkedin />
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-primary-400">
              <FaInstagram />
            </a>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 animate-pulse-slow rounded-full bg-gradient-to-tr from-primary-400 to-accent-purple opacity-50 blur-2xl" />
          <Image
            src={profile.image}
            alt={profile.name}
            width={300}
            height={300}
            priority
            className="relative z-10 h-56 w-56 rounded-full border-4 border-white/20 object-cover object-[50%_18%] shadow-2xl sm:h-72 sm:w-72"
          />
        </motion.div>
      </div>

      {/* Stat strip: in normal flow below the hero so it lines up with the
          content and never runs off-screen (framer-motion owns `transform`,
          so it can't be centred with translate classes). */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mx-auto mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
      >
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl surface-card px-4 py-3 text-center backdrop-blur-xl"
          >
            <div className="bg-gradient-to-r from-primary-300 to-accent-purple bg-clip-text text-2xl font-bold text-transparent">
              {s.value}
            </div>
            <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
          </div>
        ))}
      </motion.div>

    </section>
  );
}

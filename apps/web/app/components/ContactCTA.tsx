"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function ContactCTA() {
  return (
    <section id="contact" className="px-4 pb-24 pt-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-primary-500/15 via-accent-purple/10 to-accent-pink/10 p-10 text-center backdrop-blur-xl sm:p-14"
      >
        <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300">
          I&apos;m always open to interesting problems, new opportunities and a
          good conversation. Reach out — I reply fast.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/25 transition-transform hover:scale-105"
          >
            <Mail className="h-5 w-5" /> Email me
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="rounded-xl border border-slate-300/60 bg-white/5 px-6 py-3 font-semibold text-slate-700 backdrop-blur transition-colors hover:bg-white/10 dark:border-white/20 dark:text-white"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-2xl text-slate-500 dark:text-slate-400">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary-400">
            <FaGithub />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary-400">
            <FaLinkedin />
          </a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-primary-400">
            <FaInstagram />
          </a>
        </div>

        <p className="mt-10 text-sm text-slate-500 dark:text-slate-500">
          © {profile.name} · Built with Next.js, Tailwind & Framer Motion
        </p>
      </motion.div>
    </section>
  );
}

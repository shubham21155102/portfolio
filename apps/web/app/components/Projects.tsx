"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Things I've built"
        title="Featured Projects"
        subtitle="A few products and tools I've shipped end to end."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col overflow-hidden rounded-2xl surface-card transition-colors hover:border-primary-400/50"
          >
            {/* gradient banner */}
            <div className={`relative h-28 bg-gradient-to-r ${p.accent}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
              <span className="absolute bottom-3 left-5 text-2xl font-black text-white/90">
                {p.title}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-primary-400/25 bg-primary-500/10 px-2.5 py-1 text-xs font-medium text-primary-600 dark:text-primary-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(p.link || p.repo) && (
                <div className="mt-5 flex gap-4 border-t border-white/10 pt-4 text-sm font-semibold">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-primary-500 transition-colors hover:text-primary-400 dark:text-primary-300"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

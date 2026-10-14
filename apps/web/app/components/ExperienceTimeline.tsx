"use client";
import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Avatar from "./Avatar";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Where I've worked"
        title="Experience"
        subtitle="A startup engineer role plus a run of internships across backend, DevOps and full-stack."
      />

      <div className="relative mt-16">
        {/* vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary-400/60 via-accent-purple/40 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* node */}
              <span className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary-400 ring-4 ring-primary-400/20 sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2" />

              {/* card */}
              <div className="ml-10 w-full sm:ml-0 sm:w-[calc(50%-2rem)]">
                <div className="group rounded-2xl surface-card p-5 backdrop-blur-xl transition-colors hover:border-primary-400/50">
                  <div className="flex items-center gap-3">
                    <Avatar name={exp.company} size={48} />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-primary-500 dark:text-primary-300">
                        {exp.position}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="ml-auto rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-primary-500/10 px-2 py-0.5 text-xs font-medium text-primary-600 dark:text-primary-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* date */}
              <div
                className={`ml-10 text-sm font-medium text-slate-500 dark:text-slate-400 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "sm:pl-8 sm:text-left" : "sm:pr-8 sm:text-right"
                }`}
              >
                {exp.startDate} — {exp.endDate}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

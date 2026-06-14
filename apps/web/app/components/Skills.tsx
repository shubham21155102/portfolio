"use client";
import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="What I work with"
        title="Skills & Toolkit"
        subtitle="Everything I've picked up shipping real products — from a year in a startup to a dozen internships."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl surface-card p-6 backdrop-blur-xl transition-colors hover:border-primary-400/50"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary-500/30 to-accent-purple/30 text-primary-600 dark:text-primary-200">
                <group.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-primary-400/25 bg-primary-500/10 px-3 py-1.5 text-sm font-medium text-primary-700 dark:text-primary-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

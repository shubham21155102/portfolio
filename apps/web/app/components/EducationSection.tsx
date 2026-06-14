"use client";
import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Avatar from "./Avatar";

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <SectionHeading eyebrow="Academics" title="Education" />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            whileHover={{ y: -6 }}
            className="flex flex-col rounded-2xl surface-card p-6 backdrop-blur-xl transition-colors hover:border-primary-400/50"
          >
            <div className="flex items-center gap-3">
              <Avatar name={edu.institution} size={52} />
              <div>
                <h3 className="font-bold leading-snug text-slate-900 dark:text-white">
                  {edu.institution}
                </h3>
                <p className="text-sm text-primary-500 dark:text-primary-300">
                  {edu.degree}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                {edu.grade}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {edu.startDate} – {edu.endDate}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { education } from "../data";

export default function Education() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24 border-t border-ink-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-[1fr_auto] gap-6 md:items-end"
      >
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-paper">
            {education.school}
          </h2>
          <p className="text-paper-dim mt-2">
            {education.degree} · {education.location}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {education.honors.map((h) => (
              <span
                key={h}
                className="font-mono text-[11px] text-signal-teal border border-ink-border px-2 py-0.5"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
        <div className="text-left md:text-right">
          <div className="font-mono text-xs text-paper-faint">{education.dates}</div>
          <div className="font-mono text-lg text-signal-amber mt-1">
            {education.gpa}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

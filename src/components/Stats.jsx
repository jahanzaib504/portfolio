import { motion } from "framer-motion";
import { stats } from "../data";

export default function Stats() {
  return (
    <section className="border-b border-ink-border">
      <div className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-ink-border">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="px-6 md:px-10 py-8"
          >
            <div className="font-mono text-2xl md:text-[1.8rem] text-signal-amber">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-paper">{s.label}</div>
            <div className="text-xs text-paper-faint mt-0.5">{s.detail}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

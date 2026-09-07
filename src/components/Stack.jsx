import { motion } from "framer-motion";
import { stack } from "../data";

export default function Stack() {
  return (
    <section id="stack" className="border-t border-ink-border bg-ink-surface/40">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl text-paper mb-10"
        >
          What I build with
        </motion.h2>

        <div className="border border-ink-border font-mono text-sm bg-ink/60">
          <div className="px-5 md:px-7 py-3 border-b border-ink-border text-paper-faint text-xs">
            stack.yaml
          </div>
          <div className="px-5 md:px-7 py-6 md:py-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
            {stack.map((s, i) => (
              <motion.div
                key={s.group}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              >
                <div className="text-signal-teal">{s.group}:</div>
                <ul className="mt-1.5 space-y-1">
                  {s.items.map((it) => (
                    <li key={it} className="text-paper-dim pl-4">
                      - {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

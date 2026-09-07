import { motion } from "framer-motion";
import Pipeline from "./Pipeline";
import { profile } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="grid-bg border-b border-ink-border">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-14">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-xs text-signal-teal mb-6"
          >
            {profile.location} · open to full-stack &amp; devops roles
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-medium text-[2.6rem] leading-[1.08] sm:text-6xl md:text-[4.2rem] md:leading-[1.04] text-paper max-w-3xl"
          >
            I ship the product
            <br />
            <span className="text-paper-dim">and the pipeline</span>
            <br />
            that gets it to users.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-paper-dim"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="px-5 py-2.5 bg-signal-amber text-ink text-sm font-medium hover:bg-[#f0b96a] transition-colors focus-ring"
            >
              See the work
            </a>
            <a
              href="mailto:jahanzaibawan2008@gmail.com"
              className="px-5 py-2.5 border border-ink-border text-paper text-sm hover:border-paper-dim transition-colors focus-ring"
            >
              {profile.email}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 md:mt-20 border border-ink-border bg-ink-surface/60 px-5 pt-7 pb-4 md:px-9"
        >
          <p className="font-mono text-[11px] text-paper-faint mb-1">
            deploy log — edge-stream
          </p>
          <Pipeline />
        </motion.div>
      </div>
    </section>
  );
}

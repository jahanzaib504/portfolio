import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data";

function ProjectRow({ project, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink-border">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left py-6 md:py-7 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 group focus-ring"
      >
        <span className="font-mono text-xs text-paper-faint w-14 shrink-0">
          {project.year}
        </span>

        <span className="flex-1">
          <span className="block font-display text-xl md:text-2xl text-paper group-hover:text-signal-amber transition-colors">
            {project.title}
          </span>
          <span className="block text-sm text-paper-dim mt-1">
            {project.role}
          </span>
        </span>

        <span className="hidden lg:flex flex-wrap gap-2 max-w-sm justify-end">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] text-paper-faint border border-ink-border px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="font-mono text-signal-teal text-xl w-6 text-right shrink-0"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pl-[3.5rem] md:pr-16 grid md:grid-cols-[1fr_auto] gap-8">
              <div>
                <p className="text-paper-dim leading-relaxed max-w-2xl">
                  {project.summary}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {project.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-sm text-paper-dim leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-[1.5px] before:bg-signal-teal"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-5 lg:hidden">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-paper-faint border border-ink-border px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col gap-3 md:items-end shrink-0">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-signal-teal hover:text-paper transition-colors font-mono focus-ring whitespace-nowrap"
                  >
                    {project.linkLabel}
                  </a>
                )}
                <div className="hidden lg:flex flex-wrap gap-2 justify-end max-w-[220px]">
                  {project.tags.slice(3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-paper-faint border border-ink-border px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Work() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="work" className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between mb-2 border-b border-ink-border pb-6"
      >
        <h2 className="font-display text-3xl md:text-4xl text-paper">
          Selected work
        </h2>
        <span className="font-mono text-xs text-paper-faint hidden sm:block">
          {String(projects.length).padStart(2, "0")} projects
        </span>
      </motion.div>

      <div>
        {projects.map((p, i) => (
          <ProjectRow
            key={p.title}
            project={p}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}

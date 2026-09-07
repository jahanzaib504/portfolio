import { motion } from "framer-motion";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-30 border-b border-ink-border/70 bg-ink/85 backdrop-blur"
    >
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-paper hover:text-signal-amber transition-colors focus-ring rounded-sm"
        >
          jahanzaib<span className="text-signal-amber">.</span>awan
        </a>
        <nav className="flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-paper-dim hover:text-paper transition-colors focus-ring rounded-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:jahanzaibawan2008@gmail.com"
            className="text-sm px-3.5 py-1.5 border border-ink-border text-paper hover:border-signal-teal hover:text-signal-teal transition-colors focus-ring"
          >
            Say hello
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

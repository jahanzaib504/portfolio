import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const STAGES = [
  { key: "commit", label: "commit", meta: "a3f9c1e" },
  { key: "build", label: "build", meta: "42s" },
  { key: "test", label: "test", meta: "118 passed" },
  { key: "deploy", label: "deploy", meta: "EC2 · docker" },
  { key: "live", label: "live", meta: "edge-stream.awanlabs.space" },
];

// x-position (in the 0..1000 viewbox) for each stage node
const X = [40, 285, 530, 775, 960];
const Y = 40;

export default function Pipeline() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(reduceMotion);

  const stageDelay = 0.55;
  const startDelay = 0.5;

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 1000 110"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        {/* base track */}
        <line x1={X[0]} y1={Y} x2={X[4]} y2={Y} stroke="#293241" strokeWidth="2" />

        {/* animated fill line */}
        <motion.line
          x1={X[0]}
          y1={Y}
          x2={X[4]}
          y2={Y}
          stroke="#E3A857"
          strokeWidth="2"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reduceMotion ? 0 : STAGES.length * stageDelay, delay: startDelay, ease: "easeInOut" }}
          onAnimationComplete={() => setDone(true)}
        />

        {STAGES.map((stage, i) => {
          const isLast = i === STAGES.length - 1;
          const nodeDelay = startDelay + i * stageDelay;
          return (
            <g key={stage.key}>
              <motion.circle
                cx={X[i]}
                cy={Y}
                r={9}
                fill="#0E1219"
                stroke="#293241"
                strokeWidth="2"
                initial={{ scale: reduceMotion ? 1 : 0.4, opacity: reduceMotion ? 1 : 0.5 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  stroke: isLast ? "#4FB8A6" : "#E3A857",
                }}
                transition={{ delay: reduceMotion ? 0 : nodeDelay, duration: 0.35, ease: "easeOut" }}
              />
              <motion.circle
                cx={X[i]}
                cy={Y}
                r={3.5}
                initial={{ fill: "#293241" }}
                animate={{ fill: isLast ? "#4FB8A6" : "#E3A857" }}
                transition={{ delay: reduceMotion ? 0 : nodeDelay, duration: 0.2 }}
              />
              {isLast && (
                <motion.circle
                  cx={X[i]}
                  cy={Y}
                  r={9}
                  fill="none"
                  stroke="#4FB8A6"
                  strokeWidth="1.5"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={done ? { opacity: [0.6, 0], scale: [1, 1.9] } : {}}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <text
                x={X[i]}
                y={Y + 32}
                textAnchor="middle"
                className="fill-paper font-mono"
                style={{ fontSize: "13px", fontWeight: 500 }}
              >
                {stage.label}
              </text>
              <text
                x={X[i]}
                y={Y + 50}
                textAnchor="middle"
                className="fill-paper-faint font-mono"
                style={{ fontSize: "10.5px" }}
              >
                {stage.meta}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

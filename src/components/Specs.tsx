"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const specs = [
  { label: "Power", value: "600W", detail: "120V input" },
  { label: "Footprint", value: '18" \u00d7 19"', detail: "Desk-mountable" },
  { label: "Arms", value: "6 DOF", detail: "Each, dual configuration" },
  { label: "Neck", value: "4 DOF", detail: "Full range of motion" },
  { label: "Structure", value: "Carbon fiber", detail: "Minimized weight" },
  { label: "Workspace", value: "6\u2019 \u00d7 5\u2019", detail: "Dedicated area required" },
  { label: "Grippers", value: "2-finger", detail: "Precision textile manipulation" },
  { label: "Connectivity", value: "Wi-Fi", detail: "Stable connection required" },
];

function SpecItem({ spec, index }: { spec: (typeof specs)[0]; index: number }) {
  const specRef = useRef<HTMLDivElement>(null);
  const isSpecInView = useInView(specRef, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={specRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isSpecInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group spec-line py-7 px-4 hover:bg-weave-gray-50/50 transition-colors duration-300"
    >
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-[12px] font-mono uppercase tracking-[0.1em] text-weave-gray-400">
          {spec.label}
        </span>
      </div>
      <div className="font-display font-semibold text-[28px] md:text-[32px] tracking-[-0.03em] text-weave-black tabular-nums">
        {spec.value}
      </div>
      <span className="text-[13px] text-weave-gray-400 mt-1 block">
        {spec.detail}
      </span>
    </motion.div>
  );
}

export default function Specs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="specs" className="py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 md:gap-24">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block text-[12px] font-mono font-bold uppercase tracking-[0.15em] text-weave-orange mb-4">
              Technical specifications
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-weave-black mb-5">
              Engineered
              <br />
              with precision.
            </h2>
            <p className="text-[15px] leading-relaxed text-weave-gray-500 max-w-md">
              Every component of Isaac 0 is designed for one purpose:
              reliable, autonomous textile manipulation in your home.
            </p>

            {/* Product image from Weave */}
            <div className="mt-10 rounded-xl overflow-hidden border border-weave-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.weaverobotics.com/images/specs.png"
                alt="Isaac 0 specifications"
                className="w-full h-auto"
              />
            </div>

            <div className="hidden lg:flex items-center gap-3 mt-8">
              <div className="w-12 h-[1px] bg-weave-orange/40" />
              <span className="text-[11px] font-mono text-weave-gray-400 uppercase tracking-[0.15em]">
                Isaac 0
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {specs.map((spec, index) => (
              <SpecItem key={spec.label} spec={spec} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

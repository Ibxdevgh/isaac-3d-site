"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Folds nearly anything",
    description:
      "T-shirts, hoodies, pants, towels, undergarments — Isaac handles the full laundry spectrum with precision textile manipulation.",
    accent: "from-weave-orange/10 to-transparent",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16H28" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8V24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "70x speed-up",
    description:
      "What takes you an hour, Isaac completes in minutes. Autonomous folding that gets faster every single week.",
    accent: "from-blue-500/10 to-transparent",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6V16L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Learns every week",
    description:
      "Models updated weekly. Each fold is faster, higher quality. Isaac adapts to your wardrobe, your preferences, your standards.",
    accent: "from-emerald-500/10 to-transparent",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24C8 24 12 18 16 18C20 18 24 24 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 18C8 18 12 12 16 12C20 12 24 18 24 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M8 12C8 12 12 6 16 6C20 6 24 12 24 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Controlled by you",
    description:
      "Full app-based control. Monitor progress, set preferences, and manage everything from your phone.",
    accent: "from-violet-500/10 to-transparent",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="10" y="4" width="12" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="24" r="1.5" fill="currentColor" />
        <path d="M14 8H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="relative p-8 md:p-10 rounded-2xl border border-weave-gray-100 bg-white hover:border-weave-gray-200 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] h-full">
        {/* Subtle gradient overlay on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative">
          <div className="flex items-start justify-between mb-8">
            <div className="text-weave-gray-400 group-hover:text-weave-black transition-colors duration-300">
              {feature.icon}
            </div>
            <span className="font-mono text-[12px] text-weave-gray-300 tracking-widest">
              {feature.number}
            </span>
          </div>

          <h3 className="font-display font-semibold text-[22px] md:text-[24px] tracking-[-0.02em] text-weave-black mb-3">
            {feature.title}
          </h3>

          <p className="text-[14px] md:text-[15px] leading-relaxed text-weave-gray-500">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="product" className="py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="inline-block text-[12px] font-mono font-bold uppercase tracking-[0.15em] text-weave-orange mb-4">
            Capabilities
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-weave-black mb-5">
            Built to handle
            <br />
            your least favorite chore.
          </h2>
          <p className="text-[16px] md:text-[17px] leading-relaxed text-weave-gray-500">
            Isaac 0 combines carbon fiber precision with AI that gets smarter
            every week. Four capabilities, one purpose: give you your time back.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

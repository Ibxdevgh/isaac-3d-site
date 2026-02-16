"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Drop it in",
    description:
      "Toss your clean laundry into Isaac. No sorting, no prep. Just drop and go.",
    video: "https://weaveassets.com/landing_cdn.mp4",
  },
  {
    step: "02",
    title: "Isaac folds",
    description:
      "Dual 6-DOF arms with two-finger grippers. 30–90 minutes for an average load, fully autonomous.",
    video: "https://weaveassets.com/isaac-folds-aug-720p_cdn.mp4",
  },
  {
    step: "03",
    title: "Pick up & go",
    description:
      "Perfectly folded clothes, ready to put away. That's hours of your life, returned every week.",
    video: "https://weaveassets.com/isaac_tidies_720p_nologo_mobile_cdn.mp4",
  },
];

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {!isLast && (
        <div className="hidden md:block absolute top-1/3 -right-5 w-10 h-[1px] bg-weave-gray-200" />
      )}

      <div className="bg-white rounded-2xl border border-weave-gray-100 overflow-hidden h-full">
        {/* Video preview */}
        <div className="relative aspect-[4/3] bg-weave-gray-100 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={step.video} type="video/mp4" />
          </video>
          {/* Step number overlay */}
          <div className="absolute top-3 left-3 inline-flex items-center justify-center w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-mono font-bold text-weave-gray-500">
            {step.step}
          </div>
        </div>

        {/* Text content */}
        <div className="p-6 md:p-8">
          <h3 className="font-display font-semibold text-[20px] tracking-[-0.02em] text-weave-black mb-3">
            {step.title}
          </h3>
          <p className="text-[14px] leading-relaxed text-weave-gray-500">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-40 bg-weave-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-[12px] font-mono font-bold uppercase tracking-[0.15em] text-weave-orange mb-4">
            How it works
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-weave-black">
            Three steps. Zero effort.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step, index) => (
            <StepCard
              key={step.step}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

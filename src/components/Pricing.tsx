"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Subscription",
    badge: "Most flexible",
    price: "$450",
    period: "/mo",
    description:
      "Standard delivery. Warranty active while subscribed. Cancel anytime.",
    features: [
      "Isaac 0 robot",
      "Weekly model updates",
      "Remote specialist support",
      "App-based control",
      "Active warranty",
    ],
    cta: "Subscribe",
    highlighted: false,
  },
  {
    name: "Upfront",
    badge: "Best value",
    price: "$7,999",
    period: "one-time",
    description:
      "Priority delivery. Two-year warranty included. Own it outright.",
    features: [
      "Isaac 0 robot",
      "Priority delivery",
      "Weekly model updates",
      "Remote specialist support",
      "App-based control",
      "2-year warranty included",
    ],
    cta: "Purchase",
    highlighted: true,
  },
];

function PlanCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0];
  index: number;
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
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative rounded-2xl p-8 md:p-10 ${
        plan.highlighted
          ? "bg-weave-black text-white border-2 border-weave-gray-700"
          : "bg-white border border-weave-gray-200"
      }`}
    >
      <div
        className={`inline-block text-[11px] font-mono font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-6 ${
          plan.highlighted
            ? "bg-weave-orange text-white"
            : "bg-weave-gray-100 text-weave-gray-500"
        }`}
      >
        {plan.badge}
      </div>

      <h3
        className={`font-display font-semibold text-[20px] tracking-[-0.01em] mb-2 ${
          plan.highlighted ? "text-white" : "text-weave-black"
        }`}
      >
        {plan.name}
      </h3>

      <div className="flex items-baseline gap-2 mb-4">
        <span className="font-display font-bold text-[48px] md:text-[56px] tracking-[-0.04em] tabular-nums">
          {plan.price}
        </span>
        <span
          className={`text-[14px] font-mono ${
            plan.highlighted ? "text-weave-gray-400" : "text-weave-gray-400"
          }`}
        >
          {plan.period}
        </span>
      </div>

      <p
        className={`text-[14px] leading-relaxed mb-8 ${
          plan.highlighted ? "text-weave-gray-400" : "text-weave-gray-500"
        }`}
      >
        {plan.description}
      </p>

      <ul className="space-y-3 mb-10">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3.5 8.5L6.5 11.5L12.5 5.5"
                stroke={plan.highlighted ? "#F26522" : "#A3A3A3"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className={`text-[14px] ${
                plan.highlighted ? "text-weave-gray-300" : "text-weave-gray-600"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#order"
        className={`block w-full text-center py-4 rounded-full text-[14px] font-semibold tracking-[-0.01em] transition-all duration-300 ${
          plan.highlighted
            ? "bg-weave-orange text-white hover:bg-weave-orange-light hover:shadow-lg hover:shadow-weave-orange/20"
            : "bg-weave-black text-white hover:bg-weave-gray-800"
        }`}
      >
        {plan.cta}
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-28 md:py-40 bg-weave-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-[12px] font-mono font-bold uppercase tracking-[0.15em] text-weave-orange mb-4">
            Pricing
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-weave-black mb-5">
            Choose your plan.
          </h2>
          <p className="max-w-lg mx-auto text-[16px] leading-relaxed text-weave-gray-500">
            Both options include the full Isaac 0 experience. First deliveries
            ship February 2026 to the Bay Area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8 text-[13px] text-weave-gray-400"
        >
          $250 refundable deposit due today &middot; Bay Area only at launch
        </motion.p>
      </div>
    </section>
  );
}

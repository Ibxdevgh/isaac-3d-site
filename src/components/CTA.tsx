"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="order" className="py-28 md:py-40 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #0A0A0A 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-weave-orange/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-weave-orange/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-weave-orange rounded-full animate-pulse-slow" />
            <span className="text-[12px] font-mono font-bold text-weave-orange uppercase tracking-[0.1em]">
              Now accepting reservations
            </span>
          </motion.div>

          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-[-0.035em] text-weave-black mb-6">
            Ready to reclaim
            <br />
            your weekends?
          </h2>

          <p className="text-[16px] md:text-[17px] leading-relaxed text-weave-gray-500 mb-10 max-w-lg mx-auto">
            Reserve Isaac 0 today with a fully refundable $250 deposit.
            First deliveries ship February 2026 to the San Francisco Bay Area.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.weaverobotics.com/order"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-weave-black text-white text-[15px] font-semibold tracking-[-0.01em] rounded-full hover:bg-weave-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-weave-black/15"
            >
              Reserve Isaac 0
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#product"
              className="text-[14px] font-medium text-weave-gray-500 hover:text-weave-black transition-colors duration-200 underline underline-offset-4 decoration-weave-gray-300"
            >
              Learn more first
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-weave-gray-100">
            <div className="flex items-center gap-2 text-[13px] text-weave-gray-400">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1L10 5.5L15 6.2L11.5 9.5L12.4 14.5L8 12.2L3.6 14.5L4.5 9.5L1 6.2L6 5.5L8 1Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              YC-backed
            </div>
            <div className="flex items-center gap-2 text-[13px] text-weave-gray-400">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M5.5 8L7 9.5L10.5 6"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Fully refundable deposit
            </div>
            <div className="flex items-center gap-2 text-[13px] text-weave-gray-400">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect
                  x="2"
                  y="4"
                  width="12"
                  height="9"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M5 4V3C5 1.89543 5.89543 1 7 1H9C10.1046 1 11 1.89543 11 3V4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              Shipping Feb 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const RobotViewer = dynamic(() => import("./RobotModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-weave-gray-200 border-t-weave-orange rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 md:pt-0 overflow-hidden">
      {/* Background hero video — muted ambient loop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-[0.06]"
        >
          <source
            src="https://weaveassets.com/landing_page_hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      </div>

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(10,10,10,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange gradient accent — very subtle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-weave-orange/5 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative flex-1 max-w-[1400px] mx-auto w-full px-6 md:px-10 flex flex-col md:flex-row items-center md:gap-0">
        {/* Left — Copy */}
        <div className="flex-1 flex flex-col justify-center py-12 md:py-0 md:pr-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 bg-weave-orange rounded-full animate-pulse-slow" />
              <span className="text-[12px] font-mono font-bold uppercase tracking-[0.15em] text-weave-gray-400">
                Introducing Isaac 0
              </span>
            </div>

            <h1 className="font-display font-bold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] tracking-[-0.035em] text-weave-black mb-6">
              Folding laundry
              <br />
              <span className="relative inline-block">
                just became
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-weave-orange/30 rounded-full" />
              </span>
              <br />
              <span className="text-weave-orange">optional.</span>
            </h1>

            <p className="max-w-[440px] text-[16px] md:text-[17px] leading-relaxed text-weave-gray-500 mb-10">
              The first personal robot built for your home. Drop in a load,
              pick up perfectly folded clothes. It&apos;s that simple.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#order"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-weave-black text-white text-[14px] font-semibold tracking-[-0.01em] rounded-full hover:bg-weave-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-weave-black/10"
              >
                Reserve yours
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="text-[13px] text-weave-gray-400 font-mono">
                $250 deposit &middot; fully refundable
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right — 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex-1 w-full h-[50vh] md:h-[85vh] min-h-[400px]"
        >
          <RobotViewer className="w-full h-full" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] font-mono text-weave-gray-400 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-gradient-to-b from-weave-gray-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}

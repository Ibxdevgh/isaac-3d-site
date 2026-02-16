"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const secondaryVideos = [
  {
    src: "https://weaveassets.com/side-detail_cdn.mp4",
    label: "Precision grippers",
  },
  {
    src: "https://weaveassets.com/when-you-need-it_cdn.mp4",
    label: "Always ready",
  },
  {
    src: "https://weaveassets.com/sea_breeze_time-lapse_short-720p_cdn.mp4",
    label: "Full load timelapse",
  },
];

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-40 bg-weave-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-[12px] font-mono font-bold uppercase tracking-[0.15em] text-weave-orange mb-4">
            See it in action
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-white">
            Watch Isaac work.
          </h2>
        </motion.div>

        {/* Main demo video */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden bg-weave-gray-900 border border-weave-gray-800">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto block"
              poster="https://weaveassets.com/isaac-0-thumbnail.jpg"
            >
              <source
                src="https://weaveassets.com/isaac-folds-aug-720p_cdn.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {/* Reflection glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-weave-orange/5 blur-3xl rounded-full" />
        </motion.div>

        {/* Secondary video grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {secondaryVideos.map((video, i) => (
            <motion.div
              key={video.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="rounded-xl overflow-hidden bg-weave-gray-900 border border-weave-gray-800">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto block"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <p className="mt-3 text-[12px] font-mono text-weave-gray-500 uppercase tracking-[0.1em]">
                {video.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

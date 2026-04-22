"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

/**
 * Hero Component
 *
 * A refined, left-aligned luxury hero section focusing on cinematic video.
 *
 * Features:
 * - High-Quality Video Background (Autoplay, Muted, No-Loop)
 * - Left-Aligned Luxury Content
 * - Apple-style Scroll Parallax
 * - High-Contrast Typography
 */
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRevealed = useRef(false);

  // Scroll tracking for cinematic reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (
      video.duration &&
      video.duration - video.currentTime <= 1 &&
      !hasRevealed.current
    ) {
      hasRevealed.current = true;
      window.dispatchEvent(new CustomEvent("reveal-navbar"));
    }
  };

  // Scroll transforms (Apple-style)
  const videoZoom = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);
  const videoFilter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px) brightness(1)", "blur(15px) brightness(0.6)"],
  );

  // Animation Variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemFadeUp = {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, x: -50, letterSpacing: "0.1em" },
    animate: {
      opacity: 1,
      x: 0,
      letterSpacing: "0.3em",
      transition: {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center overflow-hidden bg-black selection:bg-white/20"
    >
      {/* 🎬 HIGH-QUALITY VIDEO BACKGROUND */}
      <motion.div
        style={{ scale: videoZoom, filter: videoFilter }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Desktop Video - Removed loop */}
        <video
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/bottle.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video - Removed loop */}
        <video
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/bottle_mobile.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Dark Overlay (Left-focused gradient) */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      {/* ✨ HERO CONTENT (Left Aligned) */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-30 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-start justify-center"
      >
        <motion.span
          variants={itemFadeUp}
          className="text-[10px] md:text-xs tracking-[0.6em] text-white/50 uppercase mb-6"
        >
          Noir Élégance Collection
        </motion.span>

        <motion.h1
          variants={titleVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-white uppercase mb-8"
        >
          Perfume
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          className="max-w-md text-sm md:text-lg text-white/60 font-light tracking-wide leading-relaxed mb-12 border-l border-white/20 pl-6"
        >
          An olfactory masterpiece blending midnight jasmine with smoked oud.
          Each drop is a testament to timeless sophistication and raw emotional
          power.
        </motion.p>

        <motion.div
          variants={itemFadeUp}
          className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
        >
          <Link
            href="/#collection"
            className="group relative px-12 py-5 rounded-xl bg-[#C8A96A]/80 text-black text-[11px] tracking-[0.4em] uppercase font-semibold overflow-hidden hover-effect"
          >
            <span className="relative z-10 group-hover:text-white hover-effect">
              Shop Now
            </span>
            <div className="absolute inset-0 bg-[#C8A96A] translate-y-full group-hover:translate-y-0 hover-effect" />
          </Link>

          <button
            onClick={() =>
              document
                .getElementById("story")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-medium hover:text-white hover-effect flex items-center gap-4 group"
          >
            <span>The Story</span>
            <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-white hover-effect" />
          </button>
        </motion.div>
      </motion.div>

      {/* 🧭 SCROLL INDICATOR (Left-aligned) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-8 md:left-16 lg:left-24 z-30 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] tracking-[0.5em] uppercase text-white/20 rotate-90 origin-left translate-x-1.5 translate-y-24">
          Scroll
        </span>
        <motion.div
          animate={{ height: [0, 48, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-linear-to-b from-white/40 to-transparent"
        />
      </motion.div>

    </section>
  );
}

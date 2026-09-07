"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(232,163,61,0.16),transparent_34%),linear-gradient(120deg,#F6F5F1_0%,#F6F5F1_62%,#edf0e9_100%)]">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(22,35,61,0.14)_0.7px,transparent_0.7px)] [background-size:14px_14px]" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-14 px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium text-forest"
        >
          Websites · Content Strategy · Social Growth
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl"
        >
          Helping businesses get found, trusted, and chosen online.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-prose text-base leading-relaxed text-ink/70 sm:text-lg"
        >
          I build the websites, content, and growth systems that turn
          strangers into customers — for local brands and e-commerce alike.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="bg-ink px-6 py-3 text-sm font-medium text-porcelain shadow-[0_8px_20px_rgba(22,35,61,0.14)] transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_12px_24px_rgba(27,75,67,0.18)]"
          >
            View my work
          </Link>
          <Link
            href="/ebook"
            className="border border-ink bg-porcelain/50 px-6 py-3 text-sm font-medium text-ink shadow-[0_8px_20px_rgba(22,35,61,0.06)] transition-[border-color,box-shadow,transform,color] hover:-translate-y-0.5 hover:border-marigold hover:text-forest hover:shadow-[0_12px_24px_rgba(232,163,61,0.14)]"
          >
            Get the free guide
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="relative mx-auto aspect-square w-full max-w-[25rem]"
        aria-hidden="true"
      >
        <motion.div
          animate={{ rotate: [0, 3, 0, -3, 0], y: [0, -7, 0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[10%] rounded-[2.5rem] bg-forest shadow-[0_24px_60px_rgba(27,75,67,0.22)]"
        />
        <div className="absolute inset-[17%] rotate-6 rounded-[2rem] border border-porcelain/40 bg-marigold shadow-[0_18px_45px_rgba(232,163,61,0.2)]" />
        <div className="absolute inset-[26%] -rotate-3 overflow-hidden rounded-[1.5rem] border border-porcelain/30 bg-ink shadow-[0_16px_35px_rgba(22,35,61,0.2)]">
          <Image
            src="/images/rakib-portrait.jpg"
            alt="Rakib Ahmed"
            fill
            priority
            sizes="(max-width: 1024px) 60vw, 300px"
            className="object-cover"
          />
        </div>
        <div className="absolute right-[3%] top-[15%] h-14 w-14 rounded-full border-8 border-porcelain bg-marigold shadow-lg sm:h-20 sm:w-20" />
        <div className="absolute bottom-[8%] left-[4%] h-4 w-20 rounded-full bg-ink/20 blur-sm" />
      </motion.div>
      </div>
    </section>
  );
}

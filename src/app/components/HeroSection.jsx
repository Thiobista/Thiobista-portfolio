"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <p className="inline-flex items-center gap-2 text-primary-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </p>
          <h1 className="text-white mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Thiobista Gedefaw
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 min-h-[2rem] sm:min-h-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Backend Engineer · Go",
                2000,
                "Full Stack Engineer",
                2000,
                "AI / ML Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="body-text mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
            I design and build reliable, scalable software, from multi-tenant
            SaaS backends in Go and PostgreSQL to fast, accessible frontends in
            Next.js and React. I care about clean architecture, maintainable
            code and products that solve real problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start max-w-sm mx-auto md:mx-0 md:max-w-none">
            <Link href="/#projects" className="btn-primary">
              View My Work
            </Link>
            <Link
              href="/images/Resume%20-%20AI%20Intern.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download CV
            </Link>
          </div>
          <div className="flex gap-5 mt-6 justify-center md:justify-start text-sm">
            <Link
              href="https://github.com/Thiobista"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              GitHub ↗
            </Link>
            <Link
              href="https://www.linkedin.com/in/thiobistagedefaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              LinkedIn ↗
            </Link>
            <Link href="/#contact" className="text-muted hover:text-white transition-colors">
              Contact ↗
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 blur-2xl" />
            <Image
              src="/images/ppl.png"
              alt="Thiobista Gedefaw"
              width={400}
              height={400}
              className="relative w-full h-full rounded-full object-cover border-4 border-[#33353F] shadow-2xl"
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 384px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

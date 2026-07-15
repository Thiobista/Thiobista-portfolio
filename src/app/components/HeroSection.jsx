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
          <p className="text-primary-400 font-medium text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2">
            Welcome to my portfolio
          </p>
          <h1 className="text-white mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am{" "}
            </span>
            <span className="block mt-1">Thiobista</span>
          </h1>
          <p className="text-muted text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 min-h-[1.75rem] sm:min-h-[2rem]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "Mobile App Developer",
                1500,
                "AI Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="body-text mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
            Full Stack Developer building modern web and AI-driven applications
            with Next.js, React, Vue, and Go. Passionate about clean UI,
            scalable systems, and real-world impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start max-w-sm mx-auto md:mx-0 md:max-w-none">
            <Link href="/#contact" className="btn-primary">
              Hire Me
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

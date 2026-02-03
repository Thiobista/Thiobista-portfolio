"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Food Recipe Site",
    description:
      "Platform for browsing, sharing, and managing recipes with filtering, ratings, and comments. Built with Go, Vue 3, TailwindCSS, Hasura, and Postgres.",
    image: "/images/food.jpg",
    gitUrl: "https://github.com/Thiobista/Food-recipe-site1",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Lanet Mobile App",
    description:
      "LANET is a modern language learning platform that helps users practice, track progress, and improve communication skills for Ethiopian languages.",
    image: "/images/lanet.png",
    gitUrl: "https://github.com/rahel-yekoye/lanet-mobile",
    previewUrl: "",
  },
  {
    id: 3,
    title: "AVS Startup Hub Management System",
    description:
      "Web-based platform designed to manage startup applications, partnerships, and startup portfolios in a centralized system.",
    image: "/images/avs.png",
    gitUrl: "https://github.com/Thiobista/AVS",
    previewUrl: "https://avs-wehm.vercel.app/",
  },
  {
    id: 4,
    title: "Shega Date",
    description:
      "ShegaDate is a smart date-spot recommendation platform that helps users discover the best places to go on dates based on their preferences and location.",
    image: "/images/shegadate.png",
    gitUrl: "https://github.com/Thiobista/ShegaDate",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Asheten",
    description: "Company portfolio website.",
    image: "/images/asheten.png",
    gitUrl: "https://github.com/Thiobista/Asheten",
    previewUrl: "",
  },
  {
    id: 6,
    title: "OCR System",
    description: "A mobile app that scans Amharic text.",
    image: "/images/ocr.png",
    gitUrl: "https://github.com/Thiobista/OCR",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Rick and Morty Explorer",
    description:
      "Nuxt 3 web app to explore Rick and Morty characters, episodes, and locations with dynamic API-driven data.",
    image: "/images/rick&morty.jpg",
    gitUrl: "https://github.com/Thiobista/Rich-and-Morty-Project",
    previewUrl: "https://rich-and-morty-project-dibp.vercel.app/",
  },
  {
    id: 8,
    title: "Song Management Website",
    description:
      "React app to manage songs with create, update, and delete features using Redux Toolkit, Redux-Saga, and Emotion.",
    image: "/images/projects/2.png",
    gitUrl: "",
    previewUrl: "https://songmanagement.vercel.app/",
  },
  {
    id: 9,
    title: "Consultancy Website",
    description:
      "Responsive consultancy website built with HTML, CSS, and JavaScript to showcase services and improve user experience.",
    image: "/images/cons.jpg",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 10,
    title: "Landing Page",
    description:
      "Conversion-focused landing page built with semantic HTML, modern CSS, and JavaScript interactions.",
    image: "/images/lnd.jpg",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 11,
    title: "Online Magazine Layout",
    description:
      "Magazine-style layout for articles and media with responsive design and smooth reading experience.",
    image: "/images/mag.jpg",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 12,
    title: "Nutrition Label",
    description:
      "Interactive nutrition label component providing detailed nutritional information with customizable serving sizes.",
    image: "/images/nutr.jpg",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 13,
    title: "Cafe Menu",
    description:
      "Digital cafe menu for displaying food and drink options online with easily updatable content.",
    image: "/images/cafe.jpg",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 14,
    title: "Web Calculator",
    description:
      "Web-based calculator built with HTML, CSS, and JavaScript for quick, accessible calculations.",
    image: "/images/cal.jpg",
    gitUrl: "",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {visibleProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      {!showAll && projectsData.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:opacity-90"
          >
            Show more projects
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

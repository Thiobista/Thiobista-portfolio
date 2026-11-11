"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "GymERP: Multi-tenant Gym SaaS",
    description:
      "Production-grade SaaS ERP for gyms: members, membership plans, QR/kiosk check-ins, payments and refunds, RBAC and revenue reports across branches.",
    image: "/images/gym-erp.svg",
    tags: ["Go", "PostgreSQL", "Next.js", "Docker"],
    gitUrl: "https://github.com/Thiobista/GYM-ERP",
    previewUrl: "",
  },
  {
    id: 2,
    title: "AVS Startup Hub Management System",
    description:
      "Web platform that manages startup applications, partnerships and startup portfolios in one central system.",
    image: "/images/avs.png",
    tags: ["Next.js", "React", "Tailwind"],
    gitUrl: "https://github.com/Thiobista/AVS",
    previewUrl: "https://avs-wehm.vercel.app/",
  },
  {
    id: 3,
    title: "Food Recipe Platform",
    description:
      "Platform for browsing, sharing and managing recipes, with filtering, ratings and comments, backed by a GraphQL API.",
    image: "/images/food.jpg",
    tags: ["Go", "Vue 3", "Hasura", "PostgreSQL"],
    gitUrl: "https://github.com/Thiobista/Food-recipe-site1",
    previewUrl: "",
  },
  {
    id: 4,
    title: "LANET Language Learning App",
    description:
      "Mobile language-learning platform that helps users practise, track progress and improve their communication skills in Ethiopian languages.",
    image: "/images/lanet.png",
    tags: ["Flutter", "Mobile"],
    gitUrl: "https://github.com/rahel-yekoye/lanet-mobile",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Amharic OCR",
    description:
      "Mobile app that uses machine learning to recognise and digitise Amharic text from images.",
    image: "/images/ocr.png",
    tags: ["Flutter", "AI / ML"],
    gitUrl: "https://github.com/Thiobista/OCR",
    previewUrl: "",
  },
  {
    id: 6,
    title: "ShegaDate",
    description:
      "Date-spot recommendation platform that suggests places to go based on each user's preferences and location.",
    image: "/images/shegadate.png",
    tags: ["Full Stack", "Recommendations"],
    gitUrl: "https://github.com/Thiobista/ShegaDate",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Rick and Morty Explorer",
    description:
      "Nuxt 3 app for exploring characters, episodes and locations, with dynamic data from the Rick and Morty API.",
    image: "/images/rick&morty.jpg",
    tags: ["Nuxt 3", "Vue"],
    gitUrl: "https://github.com/Thiobista/Rich-and-Morty-Project",
    previewUrl: "https://rich-and-morty-project-dibp.vercel.app/",
  },
  {
    id: 8,
    title: "Song Management App",
    description:
      "React app for creating, updating and deleting songs, built with Redux Toolkit, Redux-Saga and Emotion.",
    image: "/images/projects/2.png",
    tags: ["React", "Redux-Saga"],
    gitUrl: "",
    previewUrl: "https://songmanagement.vercel.app/",
  },
  {
    id: 9,
    title: "Asheten",
    description: "Company website for Asheten.",
    image: "/images/asheten.png",
    tags: ["Web"],
    gitUrl: "https://github.com/Thiobista/Asheten",
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
    <section id="projects" className="section-container">
      <h2 className="section-heading text-center mb-6 sm:mb-8 md:mb-12">
        Selected Projects
      </h2>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
      >
        {visibleProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="min-w-0"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tags={project.tags}
            />
          </motion.li>
        ))}
      </ul>
      {!showAll && projectsData.length > 6 && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="btn-primary"
          >
            Show more projects
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

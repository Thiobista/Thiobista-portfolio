"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "SQL",
  "AI / ML",
];

const EDUCATION = [
  {
    institution: "Bahir Dar University",
    detail: "Computer Science & Engineering",
  },
  {
    institution: "ALX Africa",
    detail: "Software Engineering Program",
  },
  {
    institution: "FreeCodeCamp",
    detail: "Full Stack Web Development",
  },
];

const CERTIFICATIONS = [
  "FreeCodeCamp Responsive Web Design Certificate",
  "CodSoft Web Development Internship Completion Certificate",
  "Android Developer Fundamentals",
  "Full Stack & Mobile Application Developer",
  "Entrepreneur",
  "Peace Ambassador",
];

const SkillsContent = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-3">
    {SKILLS.map((skill) => (
      <span key={skill} className="skill-badge text-center">
        {skill}
      </span>
    ))}
  </div>
);

const EducationContent = () => (
  <div className="flex flex-col gap-4">
    {EDUCATION.map((item) => (
      <div key={item.institution} className="info-card">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
          <AcademicCapIcon className="w-5 h-5 text-primary-400" />
        </div>
        <div>
          <h4 className="text-white font-semibold">{item.institution}</h4>
          <p className="text-muted text-sm mt-1">{item.detail}</p>
        </div>
      </div>
    ))}
  </div>
);

const CertificationsContent = () => (
  <div className="flex flex-col gap-3">
    {CERTIFICATIONS.map((cert) => (
      <div key={cert} className="info-card">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
          <CheckBadgeIcon className="w-5 h-5 text-primary-400" />
        </div>
        <p className="text-muted text-sm sm:text-base">{cert}</p>
      </div>
    ))}
  </div>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: CodeBracketIcon,
    content: <SkillsContent />,
  },
  {
    title: "Education",
    id: "education",
    icon: AcademicCapIcon,
    content: <EducationContent />,
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: CheckBadgeIcon,
    content: <CertificationsContent />,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white section-container text-center" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        <p className="body-text mb-8 mx-auto max-w-2xl">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-white">Thiobista Gedefaw</span>, a
          Full Stack Developer building modern web and AI-driven applications
          with Next.js, React, Vue, and Go. I&apos;m passionate about clean UI,
          scalable systems, and real-world impact, and I love crafting
          maintainable, visually appealing solutions that feel great to use.
        </p>

        <div className="tab-scroll justify-center">
          {TAB_DATA.map((tabItem) => (
            <TabButton
              key={tabItem.id}
              selectTab={() => handleTabChange(tabItem.id)}
              active={tab === tabItem.id}
              icon={tabItem.icon}
            >
              {tabItem.title}
            </TabButton>
          ))}
        </div>

        <div className="mt-8 card">{activeTab.content}</div>
      </div>
    </section>
  );
};

export default AboutSection;

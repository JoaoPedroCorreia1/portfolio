"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "IGuider",
    description: "Professional mentorship with AI for students app, developed with Nextjs, Reactjs and MongoDB",
    image: "/images/projects/1.png",
    previewUrl: "",
    gitUrl: ""
  },
  {
    id: 2,
    title: "TravelTo",
    description: "Travel planning app with AI agents, developed with React, Nestjs and PostgreSQL",
    image: "/images/projects/2.png",
    previewUrl: "",
    gitUrl: ""
  },
  {
    id: 3,
    title: "AI Help",
    description: "AI voice app for first aid help, developed with React Native, Nodejs and MongoDB",
    image: "/images/projects/3.png",
    previewUrl: "",
    gitUrl: ""
  },
  {
    id: 4,
    title: "Finance Advisor",
    description: "Finance app with AI Advisor, developed with React Native, Nodejs and MongoDB",
    image: "/images/projects/4.png",
    previewUrl: "",
    gitUrl: ""
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-primary-400 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            whileInView={"whileInView"}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
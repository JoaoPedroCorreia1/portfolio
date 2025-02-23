"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Todo App",
    description: "Todo app developed with Next.js, React, Tailwind and MongoDB.",
    image: "/images/projects/1.PNG",
    previewUrl: "https://joaopedrocorreia1-todo-app.vercel.app",
    gitUrl: "https://github.com/JoaoPedroCorreia1/todo-app"
  },
  {
    id: 2,
    title: "Finance App",
    description: "Finances app developed with Angular, NodeJS and MySql.",
    image: "/images/projects/2.png",
    previewUrl: "https://joaopedrocorreia1-finances-app.vercel.app",
    gitUrl: "https://github.com/JoaoPedroCorreia1/finances-app"
  },
  {
    id: 3,
    title: "Amazon Clone",
    description: "Amazon e-commerce clone developed with Javascript, HTML and CSS.",
    image: "/images/projects/3.PNG",
    previewUrl: "https://joaopedrocorreia1-amazon-clone.vercel.app",
    gitUrl: "https://github.com/JoaoPedroCorreia1/amazon-clone"
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
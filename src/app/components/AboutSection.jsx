"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TagButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Frontend",
    id: "frontend",
    content: (
      <ul className="flex flex-col list-disc pl-2 gap-3">
        <li>Next.js, React, Redux, Angular</li>
        <li>Javascript, Typescript</li>
        <li>HTML5, CSS3, Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="flex flex-col list-disc pl-2 gap-3">
        <li>Node.js, Django, Spring Boot</li>
        <li>Python, Java, C#, Flutter, Kotlin, Golang</li>
        <li>MySQL, PostgreSQL, MongoDB, Microservices</li>
        <li>Chatbot, Cloud (AWS, GCP, Azure)</li>
      </ul>
    ),
  },
  {
    title: "Data",
    id: "data",
    content: (
      <ul className="flex flex-col list-disc pl-2 gap-3">
        <li>PowerBI, Tableau, Matlab, MatplotLib</li>
        <li>Machine Learning (PyTorch, TensorFlow)</li>
        <li>Excel, PowerPoint</li>
      </ul>
    ),
  },
  {
    title: "Other",
    id: "other",
    content: (
      <ul className="flex flex-col list-disc pl-2 gap-3">
        <li>Agile</li>
        <li>Gitlab, Gitflows</li>
        <li>Linux (Ubuntu), Docker, Kubernetes</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-detail-500 mt-[50px]" id="about">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about-image.jpg"
          alt="About Image"
          width={500}
          height={500}
          className="mt-[-100px] rounded-[4px]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full  min-h-[440px]">
          <h2 className="text-4xl font-bold text-primary-400 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Tech Lead and Fullstack Developer.
            Experience in multiple startup projects with users.
            Working on Scalable, Innovative and Smart Apps.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              Frontend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Backend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("data")}
              active={tab === "data"}
            >
              {" "}
              Data{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("other")}
              active={tab === "other"}
            >
              {" "}
              Other{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
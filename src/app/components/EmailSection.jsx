"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      e.target.reset();
      setEmailSubmitted(true);
      setTimeout(() => {setEmailSubmitted(false)}, 4000);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 py-[90px] mt-[-150px] px-4 relative"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10">
        <h5 className="text-xl font-bold text-primary-400 my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-detail-500 mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities. Thank you.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/JoaoPedroCorreia1" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" className="brightness-75 hover:brightness-50" />
          </Link>
          <Link href="https://www.linkedin.com/in/joao-pedro-correia-moura-da-silva" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="brightness-75 hover:brightness-50" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        {(
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-text block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-white outline-0 placeholder-gray-400 text-gray-400 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-text block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-white outline-0 placeholder-gray-400 text-gray-400 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-text block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white border border-white outline-0 placeholder-gray-400 text-gray-400 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-400 hover:bg-primary-300 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            <div>
              {emailSubmitted ? (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully!
                </p>
              ): <p></p>}
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;
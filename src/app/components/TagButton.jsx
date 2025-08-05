import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-primary-400" : "text-detail-400";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-primary-300 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        initial="default"
        whileInView={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-400 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
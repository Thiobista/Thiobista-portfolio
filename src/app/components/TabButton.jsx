import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children, icon: Icon }) => {
  const buttonClasses = active
    ? "text-white"
    : "text-muted hover:text-white";

  return (
    <button
      onClick={selectTab}
      className="relative pb-3 px-2 sm:px-4 flex-shrink-0"
    >
      <div
        className={`flex items-center gap-1.5 sm:gap-2 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors ${buttonClasses}`}
      >
        {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        {children}
      </div>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="absolute bottom-0 left-0 h-0.5 bg-primary-500 rounded-full"
      />
    </button>
  );
};

export default TabButton;

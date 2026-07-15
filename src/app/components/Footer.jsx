import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white mt-8 sm:mt-12">
      <div className="page-container py-6 sm:py-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between text-center sm:text-left">
        <span className="font-semibold text-sm sm:text-base">
          Thiobista Gedefaw
        </span>
        <p className="text-slate-600 text-xs sm:text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

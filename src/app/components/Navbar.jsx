"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Services", path: "#services" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border border-[#33353F] bg-[#121212]/95 backdrop-blur-sm">
      <div className="page-container flex items-center justify-between py-3 sm:py-4">
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold truncate"
        >
          Thiobista
        </Link>

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          aria-label={navbarOpen ? "Close menu" : "Open menu"}
        >
          {navbarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>

        <div className="hidden md:block">
          <ul className="flex flex-row gap-4 lg:gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && (
        <div className="md:hidden border-t border-[#33353F] bg-[#121212]">
          <MenuOverlay
            links={navLinks}
            onLinkClick={() => setNavbarOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

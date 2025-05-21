"use client";
import React, { useState, useEffect } from "react";

import { navItems } from "@/constants/data";
import Link from "next/link";
import { MdOutlinePhone } from "react-icons/md";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  // Add scroll event listener to track when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      // Check if window exists (for SSR compatibility)
      if (typeof window !== "undefined") {
        // Set scrolled to true when scrolled more than 120px
        setScrolled(window.scrollY > 120);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Call once on mount to set initial state
    handleScroll();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-[100]  ${
        scrolled
          ? "bg-[#575757CC] transition-colors duration-300"
          : "bg-transparent"
      }`}
    >
      <div className="">
        <nav className="flex justify-between items-center gap-5">
          {/* Logo */}
          <div className={`${!scrolled && " "} rounded-xl flex items-center`}>
            <Link href="/">
              <Image
                alt="logo"
                src="/images/logo.png"
                className="w-[120px] min-w-[120px] sm:w-[155px] h-[60px] lg:w-35 lg:h-35 md:w-[180px] p-1 sm:p-2 object-contain bg-transparent rounded-xl"
                height={72}
                width={217}
              />
            </Link>
            <h2 className="w-10 hidden md:flex font-inter text-white font-bold text-2xl">
              SELRAHC CONGLOMERATE COMPANIES
            </h2>
          </div>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex items-center text-white gap-[20px] lg:gap-[40px] py-[8px] lg:py-[12px] px-[14px] lg:px-[28px] rounded-full font-medium ${
              !scrolled && ""
            }`}
          >
            {navItems.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="flex items-center gap-2 text-md font-bold relative whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Phone Button and Hamburger */}
          <div className="flex items-center gap-5">
            <Button size="lg" variant="secondary">
              <Link
                href="tel:+2543936078"
                className="flex items-center gap-2 text-white"
              >
                <span className="hidden sm:inline font-medium whitespace-nowrap overflow-hidden italic medium">
                  (254) 393-6078
                </span>
                <MdOutlinePhone className="flex-shrink-0" />
              </Link>
            </Button>

            {/* Hamburger for Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden  text-primary focus:outline-none z-[1300] bg-[#575757ee]/60 p-2 rounded-md cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={36} /> : <HiMenu size={36} />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {menuOpen && (
            <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#575757ee] flex flex-col items-center justify-center gap-8 z-[120] transition-all duration-700">
              {navItems.map((link) => (
                <div key={link.id}>
                  <Link
                    href={link.url}
                    className="flex items-center gap-2 relative justify-center left-0 text-white text-xl font-medium"
                    onClick={() => setMenuOpen(false)}
                  >

                    {link.title}
                  </Link>
                </div>
              ))}
              <Button size="lg" variant="secondary">
                <Link
                  href="tel:+2543936078"
                  className="flex items-center gap-2 text-white"
                >
                  <MdOutlinePhone className="flex-shrink-0" />
                  <span className="hidden md:inline font-light whitespace-nowrap overflow-hidden">
                    (254) 393-6078
                  </span>
                </Link>
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

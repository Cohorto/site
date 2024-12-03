"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const menuTl = gsap.timeline({ paused: true });
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu) {
      gsap.set(mobileMenu, { height: 0, opacity: 0 });

      menuTl
        .to(mobileMenu, {
          height: "auto",
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(
          mobileMenu,
          {
            opacity: 1,
            duration: 0.2,
          },
          "-=0.1",
        );

      if (isMenuOpen) {
        menuTl.play();
      } else {
        menuTl.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-6 bg-darkGray text-white fixed w-full z-50 top-0">
        <div className="flex items-center space-x-4">
          <Image
            src="/cohorto-logo.png"
            alt="Cohorto Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold tracking-wide">Cohorto</h1>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-gray-400">
            Features
          </a>
          <a href="#" className="hover:text-gray-400">
            How It Works
          </a>
          <a href="#" className="hover:text-gray-400">
            Testimonials
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg"
          >
            Schedule a Call
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden focus:outline-none z-50"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-darkGray text-white md:hidden fixed top-16 w-full z-40 overflow-hidden`}
      >
        <div className="mobile-menu-content px-4 py-2">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Features
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            How It Works
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Testimonials
          </a>
          <a
            href="#"
            className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </>
  );
}

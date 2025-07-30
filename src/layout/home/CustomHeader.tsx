"use client";

import { ArrowRightIcon, MailIcon, MenuIcon, X } from "lucide-react";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const bebasNeue = Inter({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "700",
});

export default function CustomHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-100 ">

      {/* Main Header */}
      <div className={`py-4 px-5 md:px-10 flex justify-center items-center ${isScrolled ? "backdrop-blur-md" : null}`}>
        <div className="container flex justify-between items-center">
          <h1 className={`${bebasNeue.className} cursor-pointer text-xl font-bold text-black dark:text-white`}>
            WOOKIES
          </h1>

          {isMobileMenuOpen ? (
            <X
              className="cursor-pointer md:hidden text-black/80 dark:text-white/80 transition duration-300 hover:opacity-60"
              onClick={toggleMobileMenu}
            />
          ) : (
            <MenuIcon
              className="cursor-pointer md:hidden text-black/80 dark:text-white/80 transition duration-300 hover:opacity-60"
              onClick={toggleMobileMenu}
            />
          )}

          <nav className="hidden md:flex items-center gap-8 text-black/80 dark:text-white/80">
            <a href="#" className=" px-5 py-2 rounded-[20px] transition duration-300 hover:bg-black/10 hover-">Home</a>
            <a href="#" className="transition duration-300 hover:underline">About</a>
            <a href="#" className="transition duration-300 hover:underline">Services</a>
            <a href="#" className="transition duration-300 hover:underline">Contact</a>


          </nav>
          <Button variant='default' size="lg" className="hidden bg-white dark:bg-white text-black dark:text-black  md:flex items-center cursor-pointer hover:opacity-60 transition duration-300 "> 
            Let's Talk
            <MailIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/60 dark:bg-black/60 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col py-4 px-5">
            <a
              href="#"
              className="py-3 text-black/80 dark:text-white/80 transition duration-300 hover:underline border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="py-3 text-black/80 dark:text-white/80 transition duration-300 hover:underline border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="py-3 text-black/80 dark:text-white/80 transition duration-300 hover:underline border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="py-3 text-black/80 dark:text-white/80 transition duration-300 hover:underline border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button
              className="bg-black text-white px-4 py-3 rounded-3xl text-sm hover:opacity-60 transition duration-300 mt-4 self-start"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}

    </header>
  );
}
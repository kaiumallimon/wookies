"use client";

import { ArrowRightIcon, MailIcon, MenuIcon, X } from "lucide-react";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const bebasNeue = Inter({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "700",
});

const navLinks = ["Home", "About", "Services", "Contact"];

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full top-0 z-50"
    >
      {/* Main Header */}
      <div
        className={`py-4 px-5 md:px-10 flex justify-center items-center ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="container flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${bebasNeue.className} cursor-pointer text-xl font-bold text-black dark:text-white`}
          >
            WOOKIES
          </motion.h1>

          {/* Mobile Icon */}
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

          {/* Desktop Nav */}
          <motion.nav
            className="hidden md:flex items-center gap-8 text-black/80 dark:text-white/80"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="transition duration-300 hover:underline"
              >
                {link}
              </motion.a>
            ))}
          </motion.nav>

          {/* Desktop Button */}
          <motion.div whileHover={{ scale: 1.05 }} className="hidden md:flex">
            <Button
              variant="default"
              size="lg"
              className="bg-white dark:bg-white text-black dark:text-black hover:opacity-60 transition duration-300"
            >
              Let's Talk
              <MailIcon className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-md bg-white/60 dark:bg-black/60 border-t border-gray-200 dark:border-gray-700"
          >
            <nav className="flex flex-col py-4 px-5">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="py-3 text-black/80 dark:text-white/80 transition duration-300 hover:underline border-b border-gray-100 dark:border-gray-800"
                >
                  {link}
                </motion.a>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-4 py-3 rounded-3xl text-sm hover:opacity-60 transition duration-300 mt-4 self-start"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

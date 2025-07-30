"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center pt-25 pb-10 md:pt-35 md:pb-15 mx-5"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-5 mb-6 md:mb-8 justify-center"
      >
        <div className="bg-white/30 w-[50px] h-[2px]" />
        <h3 className="text-white/50 text-xl md:text-2xl">WOOKIES</h3>
        <div className="bg-white/30 w-[50px] h-[2px]" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-6xl flex text-center font-semibold mb-4 md:mb-6"
      >
        DIGITAL MARKETING AGENCY
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm md:text-base text-white/60 text-center mb-6 md:mb-8"
      >
        Digital agency crafting impactful, user-centric experiences with cutting-edge design and technology
        <br className="hidden md:block" />
        for maximum success. Innovative digital agency crafting impactful ideas.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-3 justify-center mb-10 md:mb-12"
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button size='lg' className="cursor-pointer">
            <p>Get in touch</p>
            <ArrowUpRight className="ml-2" />
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Button variant="outline" size='lg' className="cursor-pointer border-1 hover:border-white transition-colors duration-300">
            <p>Learn more</p>
            <ArrowDownRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Image section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-6xl mx-auto relative"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-10"></div>

        {/* Text in top-left corner */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute top-4 left-4 z-20 flex flex-row items-center gap-3"
        >
          <img
            src="https://assets.aceternity.com/logo-dark.png"
            alt="logo"
            width={30}
            height={30}
          />
          <div>
            <p className="text-base font-semibold text-white/60">BOOST</p>
            <p className="text-sm ">YOUR BRAND</p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          src="/hero-image-2.jpg"
          alt="Hero Image"
          className="w-full h-auto  object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
}
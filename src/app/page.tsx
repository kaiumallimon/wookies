import Aurora from "@/components/backgrounds/Aurora";
import DarkVeil from "@/components/backgrounds/DarkVeil";
import { GridBackgroundDemo } from "@/components/backgrounds/Grid";
import LightRays from "@/components/backgrounds/LightRays";
import { ResizableHeader } from "@/layout/Header";
import HomeAboutUs from "@/layout/home/AboutUs";
import CustomHeader from "@/layout/home/CustomHeader";
import Hero from "@/layout/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Light Rays Background */}
      <div className="absolute inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0.1}
          distortion={0.1}
          className="w-full h-full"
        />
      </div>

      {/* Header */}
      <div className="relative z-100">
        <CustomHeader />
      </div>

      {/* Hero */}
      <Hero />
      <HomeAboutUs/>
      
    </div>
  );
}

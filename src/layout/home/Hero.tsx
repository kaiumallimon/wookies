import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-25 pb-10 md:pt-35 md:pb-15 mx-5">
      <div className="flex items-center gap-5 mb-6 md:mb-8 justify-center">
        <div className="bg-white/30 w-[50px] h-[2px]" />
        <h3 className="text-white/50 text-xl md:text-2xl">WOOKIES</h3>
        <div className="bg-white/30 w-[50px] h-[2px]" />
      </div>

      <h1 className="text-5xl md:text-6xl flex text-center font-semibold mb-4 md:mb-6">DIGITAL MARKETING AGENCY</h1>
      <p className="text-sm md:text-base text-white/60 text-center mb-6 md:mb-8">
        Digital agency crafting impactful, user-centric experiences with cutting-edge design and technology
        <br className="hidden md:block" />
        for maximum success. Innovative digital agency crafting impactful ideas.
      </p>
      <div className="flex gap-3 justify-center mb-10 md:mb-12">
        <Button size='lg' className="cursor-pointer">
          <p>Get in touch</p>
          <ArrowUpRight className="ml-2" />
        </Button>

        <Button variant="outline" size='lg' className="cursor-pointer border-1 hover:border-white transition-colors duration-300">
          <p>Learn more</p>
          <ArrowDownRight className="ml-2" />
        </Button>
      </div>

      {/* Image section */}
      <div className="max-w-6xl mx-auto relative">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-10"></div>

        {/* Text in top-left corner */}
        <div className="absolute top-4 left-4 z-20 flex flex-row items-center gap-3">
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
        </div>

        {/* Image */}
        <img
          src="/hero-image-2.jpg"
          alt="Hero Image"
          className="w-full h-auto  object-cover rounded-lg shadow-lg"
        />


      </div>
    </div>
  );
}
'use client';
import HeroSection from "@/components/landingPageComponents/heroSection";
import Services from "@/components/landingPageComponents/servicesSection/services";
import Bullet from "@/components/appear/Bullet";
import { motion } from "framer-motion";
import Paragraph from "@/components/appear/Paragraph";
import Phone from "@/components/appear/Phone";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Services />
      
      <div className="phone-w-details flex justify-center">
        <div className="PHONE MODE block md:hidden overflow-x-hidden">
          <Phone rotation={0} />
          <div className="mockup-phone border-gray-500 border-primary my-5">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display w-80 h-[685px] relative">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                <ul className="text-center text-4xl text-wrap px-5">
                  <li className="mb-8">Mobile Ready Websites</li>
                  <li className="mb-8">Blazing Fast Sites :|</li>
                  <li className="mb-8">Affordable Prices</li>
                </ul>
              </div>
              <img
                alt="wallpaper"
                src="https://img.daisyui.com/images/stock/453966.webp"
              />
            </div>
          </div>
        </div>

        <div className="FULL MODE hidden md:block">
          <div className="mx-auto py-9 grid grid-cols-2 gap-1">
            <div className="col-start-1 row-start-1 flex items-center justify-end pr-8 text-5xl">
              <div className="capitalize">

              <div className="items-end text-right mb-14">
                <Paragraph paragraph="Built for Mobile" />
                <Paragraph paragraph="Perfect Everywhere" />
              </div>


              <div className="px-10 text-right text-3xl">

                <Bullet
                  items={[
                    "Fast",
                    "responsive",
                    "Optimized for all screens",
                  ]}
                />
              </div>
              </div>

            </div>

            <Phone rotation={12} />
          </div>
        </div>
      </div>
    </main>
  );
}



"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: "mobile", // disable animation on mobile devices
      offset: 120,
      duration: 1000,
      once: true, // animate elements only once
    });
  }, []);

  return (
    <>
      <div className="w-full items-center h-[90vh] flex">
        <div
          className="w-full md:w-1/2 flex flex-col text-left px-6 justify-center items-center"
          data-aos="fade-up"
        >
          <div className="w-[84%]">
            <p className="font-bold text-5xl py-1 text-left">
              Crafting Creativity,
            </p>

            <p className="font-italic font-medium text-[19px]">
              Meet Sikandar, a dedicated individual currently serving as a
              teacher assistant at the GIAIC while pursuing a Bachelor's degree
              in Computer Science. With a profound interest in software
              development, Sikandar has mastered TypeScript, completing a
              diverse array of projects during their academic journey. Their
              portfolio boasts 12 projects and 3 API projects, Sikandar also
              shares their expertise by teaching TypeScript to students,
              enriching their understanding of this powerful programming
              language.
            </p>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center w-1/2">
          <Image
            data-aos="fade-down-left"
            width={360}
            className="rounded-full"
            height={230}
            src="/assets/my.jpg"
            alt="Profile Picture"
          />
        </div>
      </div>
    </>
  );
};

export default Section;

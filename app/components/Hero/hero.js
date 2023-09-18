"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import BackgroundCircles from "../../components/backgroundCircles/backgroundCircles";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi My Name is M Bilawal Zaman", "Designer", "Web Developer", "Coder"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden">
      <div className="z-0 pt-48">
        <BackgroundCircles />
      </div>
      <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="./bilawal.jpeg" alt="" />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Web Developer</h2>
      </div>
      <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
        <span>{text}</span>
        <Cursor cursorColor="#F7ABBA" />
      </h1>
      <div className="pt-5 z-50">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
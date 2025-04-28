"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-2 pt-14 mb-20" id="hero">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            MTCRE | MTCNA
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi, kenalin aku Ardhan Dimas Nuryadin."
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Network Engineer and Cybersecurity Enthusiast!
          </p>

          {/* Container tombol agar menyamping */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="#projects">
              <MagicButton
                title="Certificate"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a href="#contact">
              <MagicButton
                title="Contact Person"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl transition-all duration-500">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100 leading-snug">
                Halo semua, <span className="text-blue-400">kenalin</span>
              </h1>
              <p className="text-gray-200 text-base text-left">
                Aku Ardhan Dimas Nuryadin, seorang mahasiswa Jurusan Informatika
                di Universitas Siliwangi, Kota Tasikmalaya. Aku tertarik pada
                bidang{" "}
                <span className="font-semibold text-blue-300">Networking</span>{" "}
                dan{" "}
                <span className="font-semibold text-blue-300">
                  Cybersecurity
                </span>
                .
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex justify-center"
            >
              <Image
                src="/profile2.jpg"
                width={400}
                height={400}
                alt="Profile"
                className="rounded-2xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

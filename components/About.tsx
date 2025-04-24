"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent">
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
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
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
    </section>
  );
};

export default About;

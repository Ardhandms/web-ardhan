"use client";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col item-center text-center">
        <TextGenerateEffect
          className="heading lg:max-w-[150vw] text-center"
          words="Ready to take you into digitalization to the next level!"
        />
        <p className="text-white-200 md:mt-2 my-5 text-center">
          Reach out to me and discuss how we can achive our goals together
        </p>

        <div className="flex items-center justify-center md:gap-6 gap-8 my-5">
          <p className="md:text-base text-sm md:font-normal font-light">
            Contact Person:
          </p>
          <a href="https://www.instagram.com/ardhandms_?igsh=a3ZscDVseWMwYXQx">
            <img src="/instagram.png" width={35} height={35} />
          </a>
          <a href="https://wa.me/082320997062">
            <img src="/whatsapp.png" width={35} height={35} />
          </a>
          <a href="https://www.linkedin.com/in/ardhan-dimas-nuryadin-8a1b22298/">
            <img src="/linkedin.png" width={35} height={35} />
          </a>
        </div>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          *Oiya kalo ada bug bisa laporkan aja ke contact person diatas;{")"}
        </p>
      </div>

      <div className="flex mt-5 md:flex-row flex-col justify-between md:gap-3 gap-6">
        <p className="md:text-base text-sm md:font-normal font-light mt-8">
          Copyright © 2024 Ardhan
        </p>
      </div>
    </footer>
  );
};

export default Footer;

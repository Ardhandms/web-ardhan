import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-12 mb-8" id="projects">
      <h1 className="heading">
        My Certificate {""}
        <span className="text-blue-600">i&apos;ve Achive</span>
      </h1>

      <div className="overflow-x-auto mt-10">
        <div className="flex gap-10 py-28 px-2 sm:px-4 w-max">
          {projects.map(({ id, title, des, img, link }) => (
            <div
              key={id}
              className="min-w-[250px] sm:min-w-[250px] lg:min-w-[350px] flex-shrink-0 flex flex-col items-center"
            >
              <PinContainer title={title} href={link}>
                <a
                  href={link}
                  className="relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden lg:h-[400px] mb-10"
                >
                  <div className="relative w-full h-[350px] overflow-hidden lg:rounded-3xl bg-[#12162d]">
                    <img
                      src="/bg.png"
                      alt="bg-img"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 mb-4 object-contain w-full max-h-[350px]"
                  />
                </a>
                <div className="pt-4 pb-2 text-center min-h-[100px]">
                  {" "}
                  {/* Menambahkan min-h untuk teks */}
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                    {title}
                  </h1>
                </div>
                <p className="lg:text-xl lg:font-normal font-light text-sm text-center line-clamp-2">
                  {des}
                </p>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;

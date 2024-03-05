import React from "react";
import datas from "../utils/SkillsData";
import { Tooltip } from "primereact/tooltip";

const Skills = () => {
  return (
    <section
      id="skills"
      className="container h-auto px-8 mx-auto pt-16 flex flex-col justify-evenly items-center gap-y-3 lg:pt-24 xl:pt-20 bg-slate-400"
    >
      <h2 className="tracking-widest text-2xl font-bold bg-gradient-to-r from-teal-600 via-lime-900 to-teal-900 text-transparent bg-clip-text">
        SKILLS
      </h2>
      <span className="text-md font-light tracking-widest bg-yellow-600">
        Hover Bro!
      </span>
      <div className="flex fex-col flex-wrap gap-8 justify-evenly bg-indigo-900">
        {datas.map((item, index) => (
          <div
            key={index}
            className="w-1/4 mb-5 flex flex-row flex-wrap justify-between text-center md:w-1/6 lg:w-1/12 bg-cyan-600"
          >
            <Tooltip
              target={`#item${index}`}
              position="top"
              content={item.exp}
              mouseTrack
              mouseTrackLeft={10}
              pt={{
                text: {
                  className: "p-1 text-sm font-light bg-teal-600",
                },
              }}
            />
            <img
              id={`item${index}`}
              alt={`Card ${index}`}
              src={item.image}
              className="w-full h-auto curosr-pointer"
            />
            <p className="w-full font-medium text-xs pt-2 sm:text-sm md:text-base xl:text-lg bg-red-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

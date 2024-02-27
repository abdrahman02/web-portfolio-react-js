import React from "react";
import datas from "../utils/skills-data";
import { Tooltip } from "primereact/tooltip";

const Skills = ({ visibleSection }) => {
  return (
    <section
      id="skills"
      className="container h-screen mx-auto pt-14 flex flex-col justify-evenly items-center"
    >
      <h2 className="tracking-widest text-2xl font-bold bg-gradient-to-r from-teal-600 via-lime-900 to-teal-900 text-transparent bg-clip-text">
        SKILLS
      </h2>
      <span className="text-md font-light tracking-widest -mt-6">
        Hover Bro!
      </span>
      <div className="grid grid-cols-6 gap-8 justify-center">
        {datas.map((item, index) => (
          <div key={index} className="h-14 mb-5 flex flex-col items-center">
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
              className="h-full curosr-pointer"
            />
            <p className="font-medium text-md pt-5 pb-2">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

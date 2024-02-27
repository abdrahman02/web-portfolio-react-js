import React from "react";
import Cta from "../components/cta";
import Experience from "../components/experience";
import Certificates from "../components/certificates";
import Skills from "../components/skills";
import { ScrollTop } from "primereact/scrolltop";

const Home = () => {
  return (
    <div>
      <Cta />
      <Experience />
      <Certificates />
      <Skills />
      <ScrollTop
        pt={{
          root: {
            className: "w-2rem h-2rem animate-bounce bg-teal-600 rounded-lg",
          },
          icon: { className: "w-1rem h-1rem animate-bounce" },
        }}
      />
    </div>
  );
};

export default Home;

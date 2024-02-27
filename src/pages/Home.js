import React from "react";
import Cta from "../components/Cta";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
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

import React from "react";
import Cta from "../components/cta";
import Experience from "../components/experience";
import Certificates from "../components/certificates";
import Skills from "../components/skills";

const Home = () => {
  return (
    <div>
      <Cta />
      <Experience />
      <Certificates />
      <Skills />
    </div>
  );
};

export default Home;

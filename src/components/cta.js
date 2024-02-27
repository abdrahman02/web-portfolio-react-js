import React from "react";
import "../assets/css/Cta.css";

const Cta = () => {
  return (
    <section
      id="cta"
      className="container mx-auto pt-14 h-screen flex justify-between items-center text-slate-800"
    >
      <div className="cta-cols flex flex-col justify-between">
        <div className="greetings text-5xl font-bold tracking-widest">
          <h2>Hello There,</h2>
          <h2>I'm Rahman</h2>
        </div>
        <span className="flex items-center text-sm text-red-600">
          <i className="pi pi-google p-1 me-1 border border-red-500 rounded"></i>
          <p>Mabdulr44@gmail.com</p>
        </span>
        <div className="career-time flex flex-row gap-3">
          <div className="number font-bold text-5xl">2</div>
          <div className="text flex flex-col text-base">
            <span>Years</span>
            <span>Experience</span>
          </div>
        </div>
      </div>

      <div>
        <div className="cover-photo bg-clip-border bg-cover">
          <div className="photo rounded-full"></div>
        </div>
      </div>

      <div className="cta-cols flex flex-col items-center justify-between">
        <div className="tagline text-center tracking-widest text-sm">
          "If you stop developing, then you will be left behind by others"
        </div>
        <a
          className="text-center text-sm font-semibold p-2 border-2 rounded-lg border-teal-600 shadow-xl cursor-pointer transition ease-in-out duration-75 hover:bg-teal-600 hover:border-none hover:text-white"
          href="https://drive.google.com/drive/folders/1bl9nJrYDii8IOH_-OJ5fRDJflvnLHw8q?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Curiculum Vitae
        </a>
        <div className="social-media flex flex-col items-center">
          <span className="text-sm font-bold">Visit my social media :</span>
          <div className="icon grid grid-flow-col gap-5 w-40 pt-2">
            <a
              href="https://www.instagram.com/abd_rahman.02"
              target="_blank"
              rel="noreferrer"
            >
              <i className="pi pi-linkedin text-blue-500 text-3xl"></i>
            </a>

            <a
              href="https://github.com/abdrahman02"
              target="_blank"
              rel="noreferrer"
            >
              <i className="pi pi-github text-slate-950 text-3xl"></i>
            </a>

            <a
              href="https://www.instagram.com/abd_rahman.02"
              target="_blank"
              rel="noreferrer"
            >
              <i className="pi pi-instagram text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

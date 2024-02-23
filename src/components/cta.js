import React from "react";
import "../assets/css/cta.css";

const Cta = () => {
  return (
    <section className="container mx-auto flex justify-between items-center text-slate-800">
      <div className="cta-cols flex flex-col justify-between">
        <div className="greetings text-5xl font-bold tracking-widest">
          <h2>Hello There,</h2>
          <h2>I'm Rahman</h2>
        </div>
        <span className="text-sm text-red-600">
          <i className="fa-brands fa-google p-1 me-1 border-2 border-red-500 rounded"></i>
          Mabdulr44@gmail.com
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
      <div className="cta-cols flex flex-col justify-between">
        <div className="tagline text-center tracking-widest text-sm">
          "If you stop developing, then you will be left behind by others"
        </div>
        <div className="social-media">
          <span className="text-sm font-bold">Visit my social media :</span>
          <div className="icon grid grid-flow-col gap-5 w-32 text-3xl">
            <a href="https://www.instagram.com/abd_rahman.02" target="_blank">
              <i className="fa-brands fa-linkedin text-blue-500"></i>
            </a>

            <a href="https://github.com/abdrahman02" target="_blank">
              <i className="fa-brands fa-github text-slate-950"></i>
            </a>

            <a href="https://www.instagram.com/abd_rahman.02" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="h-auto p-8 flex flex-col justify-between items-center text-sm  text-gray-500 bg-zinc-900"
    >
      <div className="me w-full py-8 pe-8 text-justify lg:hidden">
        <h1
          className="text-4xl font-bold mb-3 text-teal-600 text-center"
          style={{ fontFamily: "Shadows Into" }}
        >
          M. Abdul Rahman
        </h1>
        <h2 className="text-2xl text-center">Contact Me</h2>
        <p className="text-center">Mabdulr44@gmail.com</p>
        <p className="sm:text-center">
          Ward. Sidomukti, District. West Range, Regency. Asahan, Province.
          North Sumatra, Indonesia
        </p>
      </div>
      <div className="atas w-11/12 flex flex-row justify-between">
        <div className="me hidden w-1/4 pb-8 pe-8 text-justify lg:block lg:pt-5">
          <h1
            className="text-3xl font-bold mb-3 text-teal-600"
            style={{ fontFamily: "Shadows Into" }}
          >
            M. Abdul Rahman
          </h1>
          <h2 className="text-xl">Contact Me</h2>
          <p>Mabdulr44@gmail.com</p>
          <p>
            Ward. Sidomukti, District. West Range, Regency. Asahan, Province.
            North Sumatra, Indonesia
          </p>
        </div>
        <div className="quick-links p-5 ">
          <h1 className="text-xl mb-3 text-teal-600">Quick Link</h1>
          <ul>
            <li>
              <a href="/#experiences" className="hover:text-teal-600">
                Experiences
              </a>
            </li>
            <li>
              <a href="/#certificates" className="hover:text-teal-600">
                Certificates
              </a>
            </li>
            <li>
              <a href="/#skills" className="hover:text-teal-600">
                Skills
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media p-5 ">
          <h1 className="text-xl mb-3 text-teal-600">Social Media</h1>
          <div className="grid gap-y-2">
            <div>
              <a
                href="https://www.linkedin.com/in/m-abdul-rahman-5ab007294/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row w-max hover:text-teal-600"
              >
                <i className="pi pi-linkedin text-xl"></i>
                &nbsp;
                <p>LinkedIn</p>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/abdrahman02"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row w-max hover:text-teal-600"
              >
                <i className="pi pi-github text-xl"></i>
                &nbsp;
                <p>Github</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/abd_rahman.02"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row w-max hover:text-teal-600"
              >
                <i className="pi pi-instagram text-xl"></i>
                &nbsp;
                <p>Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bawah text-center">
        <p>
          Created and Development by{" "}
          <span className="text-teal-600">M. Abdul Rahman</span> Using{" "}
          <a href="https://react.dev/" className="hover:text-cyan-700">
            React{" "}
          </a>
          and{" "}
          <a href="https://tailwindcss.com/" className="hover:text-cyan-500">
            TailwindCSS
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;

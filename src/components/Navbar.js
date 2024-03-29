import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <header className="w-full bg-slate-50 z-50 sticky top-0 px-5">
      <nav>
        <div className="flex justify-between items-center p-4 font-semibold">
          <span id="logo" className="text-xl lg:text-3xl 2xl:text-4xl">
            <a href="/#cta">My Portfolio</a>
          </span>
          <ul className="flex gap-20 hidden lg:flex lg:text-base 2xl:text-lg">
            <a href="/#experiences">
              <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
                EXPERIENCES
              </li>
            </a>
            <a href="/#certificates">
              <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
                CERTIFICATES
              </li>
            </a>
            <a href="/#skills">
              <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
                SKILLS
              </li>
            </a>
          </ul>

          <span className="flex justify-center items-center text-slate-800 text-xs sm:text-base 2xl:text-xl">
            <i className="pi pi-whatsapp text-xl 2xl:text-2xl  text-teal-600"></i>
            &nbsp;
            <p>(+62) 823-6016-2637</p>
          </span>

          <Sidebar
            visible={active}
            position="right"
            onHide={() => setActive(false)}
            pt={{
              root: { className: "max-w-44 lg:hidden" },
              header: { className: "pt-4 pe-4" },
              content: { className: "p-4" },
            }}
          >
            <ul className="flex flex-col font-medium text-justify text-xs sm:text-base">
              <a href="/#experiences">
                <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
                  EXPERIENCES
                </li>
              </a>
              <a href="/#certificates">
                <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
                  CERTIFICATES
                </li>
              </a>
              <a href="/#skills">
                <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
                  SKILLS
                </li>
              </a>
            </ul>
          </Sidebar>
          <Button
            icon="pi pi-bars"
            className="lg:hidden"
            onClick={() => setActive(true)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 px-5 bg-slate-50 z-10">
      <div className="flex justify-between items-center p-4 font-semibold">
        <span id="logo" className="text-3xl lg:text-4xl 2xl:text-5xl">
          <a href="/#cta">My Portfolio</a>
        </span>
        <ul className="flex gap-20 sm:hidden lg:flex lg:text-lg 2xl:text-xl">
          <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
            <a href="/#experiences">EXPERIENCES</a>
          </li>
          <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
            <a href="/#certificates">CERTIFICATES</a>
          </li>
          <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
            <a href="/#skills">SKILLS</a>
          </li>
        </ul>

        <span className="flex justify-center items-center text-slate-800 lg:text-lg 2xl:text-2xl">
          <i className="pi pi-whatsapp text-xl lg:text-2xl  text-teal-600"></i>
          &nbsp;
          <p>(+62) 823-6016-2637</p>
        </span>

        <Sidebar
          visible={active}
          position="right"
          onHide={() => setActive(false)}
          pt={{
            root: { className: "max-w-44" },
            header: { className: "pt-4 pe-4" },
            content: { className: "p-4" },
          }}
        >
          <ul className="flex flex-col font-medium text-justify">
            <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
              <a href="/#experiences">EXPERIENCES</a>
            </li>
            <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
              <a href="/#certificates">CERTIFICATES</a>
            </li>
            <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
              <a href="/#skills">SKILLS</a>
            </li>
          </ul>
        </Sidebar>
        <Button
          icon="pi pi-bars"
          className="lg:hidden"
          onClick={() => setActive(true)}
        />
      </div>
    </nav>
  );
};

export default Navbar;

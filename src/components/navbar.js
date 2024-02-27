import React from "react";
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 px-5 bg-slate-50 z-10">
      <div className="flex justify-between items-center p-4 font-semibold">
        <span id="logo" className="text-3xl">
          <a href="/#cta">My Portfolio</a>
        </span>
        <ul className="flex gap-20">
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

        <span className="flex justify-center items-center text-slate-800">
          <i className="pi pi-whatsapp text-xl text-teal-600"></i>
          &nbsp;
          <p>(+62) 823-6016-2637</p>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

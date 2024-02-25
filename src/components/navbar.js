import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-50 z-10">
      <div className="flex justify-between items-center p-4 font-semibold">
        <span id="logo" className="text-3xl">
          <a href="/#cta">My Portfolio</a>
        </span>
        <ul className="flex gap-20">
          <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
            <a href="/#experiences">EXPERIENCES</a>
          </li>
          <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
            <a href="/">CERTIFICATES</a>
          </li>
          <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
            <a href="/">SKILLS</a>
          </li>
        </ul>

        <span className="text-slate-800">
          (+62) 823-6016-2637 &nbsp;
          <i className="fa-solid fa-square-phone-flip text-xl text-teal-600"></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

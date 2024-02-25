import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center p-4 font-semibold">
        <span id="logo" className="text-3xl">
          <a href="/">My Portfolio</a>
        </span>
        <ul className="flex gap-20">
          <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
            <a href="/">EXPERIENCES</a>
          </li>
          <li className="p-2 text-teal-600 hover:border-x-2 rounded-full border-x-teal-600 transition-all">
            <a href="/">EDUCATIONS</a>
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
    </div>
  );
};

export default Navbar;

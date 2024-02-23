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

        <a
          className="text-2xl text-blue-600 mx-3 p-1 rounded-full shadow-2xl shadow-slate-800"
          href="https://www.linkedin.com/in/m-abdul-rahman-5ab007294/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

import { scrollTo } from "../util/scrollTo";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="z-10 fixed w-screen flex justify-between select-none py-6 text-white/80 font-medium text-[18px] min-w-[400px] flex-col sm:flex-row sm:ml-0 bg-zinc-800">
      <div className="w-full justify-start pl-[50px] hidden md:flex"></div>

      {/* Hamburger menu icon */}
      <div className="sm:hidden ml-5">
        <button className="p-4 focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <div
        className={`w-full flex flex-col justify-center ml-10 ${
          menuOpen ? "flex" : "hidden"
        } sm:flex sm:flex-row sm:gap-x-4 `}
      >
        <button
          className="hover:text-white duration-200 ease-in-out"
          onClick={() => scrollTo("about")}
        >
          About
        </button>
        <button
          className="hover:text-white duration-200 ease-in-out"
          onClick={() => scrollTo("skills")}
        >
          Skills
        </button>
        <button
          className="hover:text-white duration-200 ease-in-out"
          onClick={() => scrollTo("work")}
        >
          Work
        </button>
        <button
          className="hover:text-white duration-200 ease-in-out"
          onClick={() => scrollTo("contact")}
        >
          Contact
        </button>
      </div>

      <a className="w-full justify-end pr-8 sm:pr-20 hidden sm:flex">
        <button onClick={() => scrollTo("contact")}>
          <span className="px-7 py-3 rounded-full bg-yellow-400 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
            Hire Me
          </span>
        </button>
      </a>

      <hr className="mt-6 sm:hidden border-zinc-900"></hr>
    </div>
  );
};

export default Nav;
